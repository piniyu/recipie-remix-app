import { useEffect, useState } from 'react'
import { json, LoaderArgs } from '@remix-run/node'
import CardGrid from '~/components/ui/card/card-grid'
import SearchBar from '~/components/form/inputs/search-bar'
import { useFetcher, useLoaderData } from '@remix-run/react'
import { searchUserRecipes } from '~/service/loaders/search-recipes.server'
import { getMyRecipes, getThumbnails } from '~/service/loaders/query-card-list'
import { requireUserId } from '~/service/session.server'
import { SortingDropdown } from '~/components/ui/sorting-dropdown'

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request)
  const searchRes = await searchUserRecipes(request, userId)
  const recipeOrder = new URL(request.url).searchParams.get('orderby') as
    | 'new'
    | 'popular'
    | null
  const myRecipes = await getMyRecipes({ userId, orderBy: recipeOrder })
  const withThumbnail = await getThumbnails(
    myRecipes.map(e => ({
      recipeId: e.id,
      thumbnails3Key: e.thumbnail?.s3Key ?? '',
    })),
  )
  const mappedRecipes = myRecipes.map(recipe => ({
    ...recipe,
    thumbnail: withThumbnail?.find(e => e.recipeId === recipe.id)?.thumbnail,
    isLiked: !!recipe.favorite.find(e => e.userId === userId),
    isInBasket: !!recipe.baskets.find(e => e.userId === userId),
  }))
  return json(
    { myRecipes: mappedRecipes, searchRes },
    { headers: { 'Cache-Control': 'max-age=3600' } },
  )
}

export default function MyRecipes() {
  const data = useLoaderData<typeof loader>()
  const fetcher = useFetcher<typeof loader>()
  const [searchList, setSearchList] = useState<typeof data['searchRes']>([])
  const [recipeList, setRecipeList] = useState(data.myRecipes)

  useEffect(() => {
    if (fetcher.data?.searchRes) {
      setSearchList(fetcher.data.searchRes)
    }
  }, [fetcher.data?.searchRes])

  useEffect(() => {
    if (fetcher.data?.myRecipes) {
      setRecipeList(fetcher.data.myRecipes)
    } else {
      setRecipeList(data.myRecipes)
    }
  }, [fetcher.data?.myRecipes, data.myRecipes])

  return (
    <div className="layout-pt layout-px flex flex-col gap-9">
      <div className="mx-auto flex flex-wrap gap-6 md:flex-nowrap">
        <SearchBar
          placeholder="My Recipes Search"
          list={searchList.map(item => ({
            value: item.title,
            link: `/recipe/${item.id}`,
          }))}
          fetch={inputValue => {
            fetcher.load(`/my-recipes?search=${inputValue}`)
          }}
        />

        <SortingDropdown fetcher={fetcher} />
        {/* <DropdownMenu
          summary="Filter"
          details={<div>filter checkbox</div>}
          icon={<span className="material-symbols-rounded">tune</span>}
        /> */}
      </div>

      <CardGrid
        data={recipeList.map(recipe => ({
          id: recipe.id,
          thumbnail: recipe.thumbnail?.url ?? null,
          author: recipe.author.name ?? recipe.author.email.split('@')[0],
          title: recipe.title,
          isLiked: recipe.isLiked,
          isInBasket: recipe.isInBasket,
          favCounts: recipe.likesNum,
          basketCounts: recipe.basketsNum,
        }))}
      />
    </div>
  )
}
