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

  const value = useMemo(
    () => ({
      readingList,
      setReadingList,
      addToReadingList
    }), [readingList, addToReadingList]
  )
  return (
    <ReadingListContext.Provider value={value}>{children}</ReadingListContext.Provider>
  )
}
