import { useState, useEffect } from "react"

const useScreenWidth = (): number => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])
  return width
}

export default useScreenWidth
