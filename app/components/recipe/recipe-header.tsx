import { Link, useNavigate, useParams } from '@remix-run/react'
import moment from 'moment'
import { useEffect, useState } from 'react'
import DifficultyBtn from '../difficulty'
import IconBtn from '../Icon-btn'
import Tag from '../tag'
import HeaderImg from './header-img'
import img1 from '../../../public/assets/img1.jpeg'
import type { Difficulty, Thumbnail } from '@prisma/client'
import ContentCard from '../card/content-card'
import { IconForm } from '../card/card'
import BasketIcon from '~/components/icons/ShoppingBasketFill0Wght400Grad25Opsz48'
import BasketIconFill from '~/components/icons/ShoppingBasketFill1Wght400Grad25Opsz48'
import LikeIcon from '~/components/icons/FavoriteFill0Wght400Grad25Opsz48'
import LikeIconFill from '~/components/icons/FavoriteFill1Wght400Grad25Opsz48'
import PersonIcon from '~/components/icons/PersonFill0Wght400Grad25Opsz48'

export default function RecipeHeader({
  title,
  authorName,
  createdAt,
  difficulty,
  thumbnailSrc,
  favCounts,
  basketCounts,
  recipeId,
  isInBasket,
  isLiked,
  tags,
}: {
  title: string
  authorName: string
  createdAt: string
  difficulty: Difficulty
  // preSignedUrl: string
  thumbnailSrc: string
  favCounts: number
  basketCounts: number
  recipeId: string
  isLiked: boolean
  isInBasket: boolean
  tags: string[]
}): JSX.Element {
  const [like, setLike] = useState(isLiked)
  const [likeCounts, setLikeCounts] = useState(favCounts)
  const [basket, setBasket] = useState(isInBasket)
  const [inBasketCounts, setInBasketCounts] = useState(basketCounts)
  return (
    <div className="flex flex-col space-y-10">
      <ContentCard>
        <div className="flex flex-col gap-4 md:flex-row md:gap-10">
          <HeaderImg src={thumbnailSrc} />
          <div className="flex flex-1 flex-col gap-5 md:gap-8">
            <h1 className="text-black dark:text-gray-200">{title}</h1>
            <div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <span className="inline-flex items-center gap-2">
                  <PersonIcon className="svg-md svg-gray" />
                  {authorName}
                </span>
                <div className="w-[1px] self-stretch bg-gray-200 dark:bg-gray-500"></div>
                <span>{moment(createdAt).format('LL')}</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex gap-3">
                {tags?.map((e, i) => (
                  <Tag key={i} text={e} />
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                className="btn-primary btn-md h-fit w-full cursor-pointer text-lg"
                to={`/recipe/${recipeId}/modal`}
              >
                Start Cooking
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-gray-600 dark:text-gray-400 md:justify-evenly">
          <div className="flex  flex-col items-center md:flex-row ">
            <span>Difficulty:</span>
            <DifficultyBtn {...{ difficulty }} />
          </div>
          <div className="h-[35px] w-[1px] bg-gray-200 dark:bg-gray-500"></div>
          <div className="flex  items-center gap-2">
            <IconForm
              className={`icon-btn-sm rounded-full bg-white text-black transition-colors hover:bg-gray-200 dark:bg-gray-200 dark:hover:bg-gray-300
              `}
              icon={
                like ? (
                  <LikeIconFill className="svg-md fill-red-500" />
                ) : (
                  <LikeIcon className="svg-md fill-black" />
                )
              }
              action={`/action/recipe/like/${recipeId}`}
              onClickHandler={() => {
                setLike(prev => {
                  if (prev) {
                    setLikeCounts(prevNum => prevNum - 1)
                  } else {
                    setLikeCounts(prevNum => prevNum + 1)
                  }
                  return !prev
                })
                // console.log(e)
              }}
            />
            <span>{likeCounts}</span>
          </div>
          <div className="h-[35px] w-[1px] bg-gray-200 dark:bg-gray-500"></div>
          <div className="flex  items-center gap-2">
            <IconForm
              className={`icon-btn-sm rounded-full bg-white text-black transition-colors hover:bg-gray-200 dark:bg-gray-200 dark:hover:bg-gray-300
              `}
              action={`/action/add-basket/${recipeId}`}
              icon={
                basket ? (
                  <BasketIconFill className="svg-md fill-blue-500" />
                ) : (
                  <BasketIcon className="svg-md fill-black" />
                )
              }
              onClickHandler={() => {
                setBasket(prev => {
                  if (prev) {
                    setInBasketCounts(prevNum => prevNum - 1)
                  } else {
                    setInBasketCounts(prevNum => prevNum + 1)
                  }
                  return !prev
                })
              }}
            />
            <span>{inBasketCounts}</span>
          </div>
        </div>
      </ContentCard>
    </div>
  )
}
