import { createContext, useCallback, useMemo, useState } from 'react'

export const ReadingListContext = createContext()

export const ReadingListProvider = ({ children }) => {
  const [readingList, setReadingList] = useState([])

  const addToReadingList = useCallback(booksList => {
    setReadingList(prevState => ([
      ...prevState,
      {
        ...booksList
      }
    ]))
  }, [])

  const removeFromReadingList = useCallback((product) => {
    return setReadingList(prevState => prevState.filter(item => item.ISBN !== product.ISBN))
  }, [])

  const value = useMemo(
    () => ({
      readingList,
      setReadingList,
      addToReadingList,
      removeFromReadingList
    }), [readingList, addToReadingList, removeFromReadingList]
  )
  return (
    <ReadingListContext.Provider value={value}>{children}</ReadingListContext.Provider>
  )
}
