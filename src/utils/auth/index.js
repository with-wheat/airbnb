import { useState, useEffect } from 'react'
function useLocalStorage(key) {
  const [data, setData] = useState(() => {
    const data = localStorage.getItem(key)
    if (!data) return ''
    return JSON.parse(data)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data))
  }, [data])

  return [data, setData]
}

export default useLocalStorage
