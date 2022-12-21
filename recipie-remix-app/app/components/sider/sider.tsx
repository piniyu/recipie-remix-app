import {
  Link,
  NavLink,
  useFetcher,
  useLoaderData,
  useMatches,
} from '@remix-run/react'
import React, { useContext } from 'react'
import Basket from '~/icons/basket'
import Favorite from '~/icons/favorite'
import Recipe from '~/icons/recipe'
import { db } from '~/utils/db.server'
import Logo from '../../icons/logo'
import AuthCheck from '../auth/auth-check'
import { localStorageKey, setLocalValue } from '../localstorage-form/methods'
import LogoutForm from '../logout-form'
import { SiderActionKind, SiderItemType } from './sider-context'
import { SiderContext } from './sider-context'

function SiderItem({
  icon,
  value,

  hasChild = false,
  route,
}: SiderItemType & { hasChild?: boolean }) {
  // const { dispatch } = useContext(SiderContext)
  if (route) {
    // console.log(route)
    return (
      <NavLink
        to={route}
        onClick={() => {}}
        className={({ isActive }) =>
          `
          flex items-center gap-4 
          relative
          sider-item sider-item-svg 
         
          transition-colors
          hover:bg-primary
          
          ${
            hasChild
              ? `
            after:content-['']
            after:block
            after:absolute
            after:w-full
            after:h-[1px]
            after:-ml-9
            after:bottom-0
            after:bg-white
            `
              : ''
          }
          ${isActive ? '  bg-primary' : ' text-black '}
          `
        }
      >
        {/* before:content-[""] 
          before:absolute 
          before:block 
          before:h-full before:w-1 
          before:-ml-9 
          hover:before:bg-primary-600 */}

        {/* ${
          isActive
            ? isChild
              ? 'hover:bg-primary-700/10 bg-primary-600/10 text-primary-600 before:bg-primary-600'
              : 'text-primary-600 before:bg-primary-600 bg-primary-600/10 hover:bg-primary-700/10'
            : ' text-gray-500 '
        } */}
        {icon}
        {value}
      </NavLink>
    )
  } else if (typeof value !== 'string' && React.isValidElement(value)) {
    return value
  }
  return (
    <span
      className={`
          flex items-center gap-4 
          ml-5 !mt-8
          text-sm uppercase
          text-gray-400
          tracking-wider
          select-none
  `}
    >
      {value}
    </span>
  )
}

export default function Sider(): JSX.Element | null {
  const defaultSiderValue: SiderItemType[] = [
    //     {
    //     icon: <Overview />, value: 'Overview'
    // },
    // { value: 'Upload recipe', route: 'upload', isBtn: true },
    { value: 'Pages' },
    { icon: <Recipe />, value: 'My Recipes', route: 'my-recipes' },
    { icon: <Favorite />, value: 'Favorite', route: 'favorite' },
    { icon: <Basket />, value: 'Basket', route: 'basket' },
    { value: 'Authentication' },
  ]
  const { hidden, close } = useContext(SiderContext)

  if (hidden) {
    return null
  }
  return (
    <nav
      className={`
      fixed z-20 
      flex-shrink-0 
      w-[255px] h-screen 
      top-0 
      flex flex-col 
      space-y-4 
      pt-4 
      bg-white 
      shadow-xl 
      overflow-auto
      transition-transform
     ${close ? '-translate-x-full' : ''}
     `}
    >
      <NavLink to="/">
        <div className="sider-item flex p-0 h-7">
          <Logo />
        </div>
      </NavLink>

      {/* <div className="sider-item px-0">
        <div className="flex flex-col items-center gap-3 my-8">
          <span
            className="material-symbols-rounded p-1 text-4xl leading-none bg-primary text-black rounded-full "
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            person
          </span>
          <span>{userId}</span>
          <Link
            to="/upload/details"
            className="btn-sm w-full bg-gradient-to-l from-primary to-primary/50 font-medium"
          >
            Upload recipe
          </Link>
        </div>
      </div> */}
      <div className="flex-1 space-y-4">
        {defaultSiderValue.map(
          ({ icon, value, children, route, isBtn }, idx) => {
            if (isBtn) {
              return (
                <div className="sider-item px-0 pb-8" key={idx}>
                  {route ? (
                    <Link to={route} className="btn-md btn-primary">
                      {value}
                    </Link>
                  ) : (
                    value
                  )}
                </div>
              )
            }
            return (
              <React.Fragment key={idx}>
                <SiderItem
                  {...{
                    value,
                    icon,
                    hasChild: typeof children !== 'undefined',
                    route,
                    idx,
                  }}
                />
                {children && (
                  <div className="space-y-4">
                    {children.map((child, idx) => (
                      <SiderItem
                        key={`${child.value}_${idx}`}
                        icon={child.icon}
                        value={child.value}
                        route={child.route}
                      />
                    ))}
                  </div>
                )}
              </React.Fragment>
            )
          },
        )}
        <AuthCheck loginConfirmModal={false}>
          {user => {
            if (user && user.id !== null) {
              return (
                <LogoutForm
                  formProps={{ className: 'flex items-center' }}
                  btnClassName=" gap-4 relative
          sider-item sider-item-svg 
          text-left
          transition-colors hover:bg-primary"
                />
              )
            }
            return (
              <SiderItem
                value={'Login'}
                route={`/login?redirectTo=${
                  window ? window.location.href : ''
                }`}
              />
            )
          }}
        </AuthCheck>
      </div>
    </nav>
  )
}
