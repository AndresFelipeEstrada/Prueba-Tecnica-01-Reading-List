import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { useFilter } from '../hooks/useFilter'

export const ReadingListContext = createContext()

export const ReadingListProvider = ({ children }) => {
  const [readingList, setReadingList] = useState([])
  const { filteredProducts } = useFilter()
  const [disponible, setDisponible] = useState(filteredProducts.length)

  const addToReadingList = useCallback(booksList => {
    setReadingList(prevState => ([
      ...prevState,
      {
        ...booksList
      }
    ]))
    setDisponible(prev => prev - 1)
  }, [])

  const removeFromReadingList = useCallback((product) => {
    const remove = setReadingList(prevState => prevState.filter(item => item.ISBN !== product.ISBN))
    setDisponible(prev => prev + 1)
    return remove
  }, [])

  useEffect(() => {
    setDisponible(filteredProducts.length)
  }, [addToReadingList, removeFromReadingList])

  const value = useMemo(
    () => ({
      readingList,
      setReadingList,
      addToReadingList,
      removeFromReadingList,
      disponible
    }), [readingList, addToReadingList, removeFromReadingList, disponible]
  )
  return (
    <ReadingListContext.Provider value={value}>{children}</ReadingListContext.Provider>
  )
}
