import React, { ReactNode, useEffect, useRef, useState } from 'react'

export default function DropdownMenu({
  hasDownArrow,
  icon,
  summary,
  details,
  direction = 'left',
}: {
  hasDownArrow?: boolean
  icon?: ReactNode
  summary: string | ReactNode
  details: ReactNode
  direction?: 'left' | 'right'
}): JSX.Element {
  const [open, setOpen] = useState(false)
  const detailsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (
        detailsRef.current &&
        e.target &&
        !detailsRef.current.contains(e.target as HTMLElement)
      ) {
        setOpen(false)
      }
    }
    window.addEventListener('click', clickOutside)

    return () => {
      window.addEventListener('click', clickOutside)
    }
  }, [])

  return (
    <div
      // key={`${summary}`}
      className="relative select-none text-gray-500 dark:text-gray-400"
      ref={detailsRef}
    >
      {typeof summary === 'string' ? (
        <button
          className="btn-sm flex h-full cursor-pointer items-center gap-2 border-none bg-white shadow-sm  dark:bg-dark-gray"
          onClick={e => {
            setOpen(o => !o)
          }}
        >
          {icon}
          {summary}
          {hasDownArrow && (
            <span
              className={`material-symbols-rounded transition-transform ${
                open ? '-rotate-180' : ''
              }`}
            >
              expand_more
            </span>
          )}
        </button>
      ) : (
        <div onClick={() => setOpen(prev => !prev)}>{summary}</div>
      )}
      {open && (
        <div
          className={`
          absolute z-10 
          mt-1 flex 
           flex-col rounded-lg 
           bg-white
           px-2 py-2 shadow-xl dark:border 
          dark:border-gray-600 dark:bg-dark-gray
          ${direction === 'left' ? '' : 'right-0'}
				`}
          onClick={() => setOpen(false)}
        >
          {details}
        </div>
      )}
    </div>
  )
}
