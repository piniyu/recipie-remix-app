import { useEffect, useRef } from 'react'

export default function HeaderImg({ src }: { src: string }): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const onScroll = (e: Event) => {
      const scrollTop = (e.target as Document).documentElement.scrollTop
      if (ref.current) {
        const element = ref.current
        const height = element.getBoundingClientRect().height
        element.style.opacity = `${1 - (scrollTop / height) * 1.1}`
        element.style.transform = `translateY(-${scrollTop * 0.3}%)`
      }
    }
    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className=" aspect-w-5 aspect-h-1 sticky top-0 " ref={ref}>
      <img
        src={src}
        alt="recipe-header-img"
        className="w-full h-full object-cover object-center "
      />
    </div>
  )
}