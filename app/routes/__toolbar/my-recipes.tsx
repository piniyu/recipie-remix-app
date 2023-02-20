import React, { useEffect, useState } from 'react'
import { json, LoaderArgs, LoaderFunction } from '@remix-run/node'
import { db } from '~/utils/db.server'
import { requireUserId } from '~/utils/session.server'
import CardGrid from '~/components/card/card-grid'
import DropdownMenu from '~/components/drop-down-menu'
import SearchBar from '~/components/search-bar'
import { Prisma } from '@prisma/client'
import { useFetcher, useLoaderData } from '@remix-run/react'
import { searchUserRecipes } from '~/lib/loaders/search-recipes.server'
import {
  getMyRecipes,
  getThumbnails,
  recipesListData,
} from '~/lib/loaders/query-card-list'
// import { CardListLoaderData } from '.'

// type LoaderData = {
//   myRecipes: CardListLoaderData['allRecipes']
//   searchRes: CardListLoaderData['searcheRes']
// }

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request)
  const searchRes = await searchUserRecipes(request, userId)
  const recipeOrder = new URL(request.url).searchParams.get('orderby') as
    | 'new'
    | 'popular'
    | null
  const myRecipes = await getMyRecipes({ userId, orderBy: recipeOrder })
  const withThumbnail = await getThumbnails(myRecipes)
  const mappedRecipes = withThumbnail.map(recipe => ({
    ...recipe,
    isLiked: !!recipe.favorite.find(e => e.userId === userId),
    isInBasket: !!recipe.baskets.find(e => e.userId === userId),
  }))
  return json({ myRecipes: mappedRecipes, searchRes })
}

export default function MyRecipes() {
  const data = useLoaderData<typeof loader>()
  const fetcher = useFetcher<typeof loader>()
  const [searchList, setSearchList] = useState<typeof data['searchRes']>([])
  const [recipeList, setRecipeList] = useState(data.myRecipes)
  const [listOrder, setListOrder] = useState<'New' | 'Popular'>('New')

  useEffect(() => {
    if (fetcher.data?.searchRes) {
      console.log(fetcher.data.searchRes)
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
      <div className="flex justify-center gap-6">
        <SearchBar
          placeholder="My Recipes Search"
          list={searchList.map(item => ({ value: item.title, id: item.id }))}
          fetch={inputValue => {
            fetcher.load(`/my-recipes?search=${inputValue}`)
          }}
        />

        <DropdownMenu
          summary={listOrder}
          details={
            <ul>
              <li
                className={`drop-down-item ${
                  listOrder === 'New'
                    ? 'bg-primary text-black dark:bg-primary-dark dark:text-gray-200'
                    : ''
                }`}
                onClick={() => {
                  setListOrder('New')
                  fetcher.load(`/?index&orderby=new`)
                }}
              >
                New
              </li>
              <li
                className={`drop-down-item ${
                  listOrder === 'Popular'
                    ? 'bg-primary text-black dark:bg-primary-dark dark:text-gray-200'
                    : ''
                }`}
                onClick={() => {
                  setListOrder('Popular')
                  fetcher.load(`/?index&orderby=popular`)
                }}
              >
                Popular
              </li>
            </ul>
          }
          hasDownArrow
        />
        {/* <DropdownMenu
          summary="Filter"
          details={<div>filter checkbox</div>}
          icon={<span className="material-symbols-rounded">tune</span>}
        /> */}
      </div>

      <CardGrid
        data={recipeList.map(recipe => ({
          id: recipe.id,
          thumbnail: recipe.thumbnail.jpgSrc,
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
