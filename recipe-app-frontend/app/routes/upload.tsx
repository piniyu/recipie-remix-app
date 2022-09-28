import { Outlet } from '@remix-run/react'
import { useContext, useEffect } from 'react'
import { SiderContext } from '~/components/sider/sider-context'

export default function Upload(): JSX.Element {
  const { value, setValue } = useContext(SiderContext)
  useEffect(() => {
    setValue({
      items: [
        { value: 'Details' },
        { value: 'Ingredients' },
        { value: 'Steps', children: [{ value: '1. Untitled' }] },
      ],
    })
  }, [])
  return (
    <div>
      <header className="flex items-center justify-between layout-px pt-14 pb-4 border-b border-gray-200 text-black ">
        <h3 className="font-semibold">Upload Recipe</h3>
        <div className="flex gap-2">
          <button className="btn-border btn-sm">Save</button>
          <button className="btn-primary btn-sm">Public</button>
        </div>
      </header>
      <div className="layout-px pt-6">
        <Outlet />
      </div>
    </div>
  )
}
