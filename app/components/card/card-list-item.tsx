import { Form, useLocation } from '@remix-run/react'
import React, { ReactNode } from 'react'
import img1 from '../../../public/assets/img1.jpeg'
import NumberInput from '../inputs/number-input'

export default function CardListItem({
  title,
  onDelete,
  recipeId,
  subTitle,
}: {
  title: string
  onDelete?: (e: React.FormEvent) => void
  recipeId: string
  subTitle?: ReactNode
}): JSX.Element {
  const location = useLocation()
  return (
    <div className="flex gap-4 ">
      <div className="w-24">
        <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-md">
          {/* <div className="p-1 bg-white rounded-lg"> */}
          <img
            className="h-full w-full object-cover object-center "
            src={img1}
          />
          {/* </div> */}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <h4 className="flex-1  font-medium">{title}</h4>
        {subTitle}
      </div>
      {onDelete ? (
        <Form className="flex " onSubmit={onDelete} method="post">
          <input
            type="hidden"
            name="redirectTo"
            value={`${location.pathname}${location.search}`}
          />
          <input type="hidden" name="deleteId" value={recipeId} />
          <button
            className="flex rounded-full p-1"
            // name={recipeId}
            type="submit"
          >
            <span className="material-symbols-rounded text-lg leading-none text-gray-500 dark:text-gray-300">
              close
            </span>
          </button>
        </Form>
      ) : null}
    </div>
  )
}
