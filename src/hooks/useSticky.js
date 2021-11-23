import { useEffect, useState, useRef } from 'react'

function useSticky() {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    window.scrollY > element.current?.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false)
  }

  // This function handles the scroll performance issue
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll))
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [debounce, handleScroll])

  return { isSticky, element }
}

export default useSticky
