import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { useFilter } from '../hooks/useFilter'

export const ReadingListContext = createContext()

const READING_STORAGE = 'reading'
const DISPONIBLE = 'disponible'

export const ReadingListProvider = ({ children }) => {
  const { filteredProducts } = useFilter()

  const getInitialValue = () => {
    try {
      const storageReading = window.localStorage.getItem(READING_STORAGE)
      return storageReading ? JSON.parse(storageReading) : []
    } catch (error) {
      return []
    }
  }

  const getInitialValueAvaliable = () => {
    try {
      const storageReading = window.localStorage.getItem(DISPONIBLE)
      return storageReading ? parseInt(storageReading) : +filteredProducts.length
    } catch (error) {
      return parseInt(filteredProducts.length)
    }
  }

  const [readingList, setReadingList] = useState(getInitialValue)

  const [disponible, setDisponible] = useState(getInitialValueAvaliable)

  const addToReadingList = useCallback(booksList => {
    const newBooks = [...readingList, booksList]
    setReadingList(newBooks)
    window.localStorage.setItem(READING_STORAGE, JSON.stringify(newBooks))

    let totalDisponible = window.localStorage.getItem(DISPONIBLE)
    totalDisponible = (parseInt(totalDisponible) - 1)
    window.localStorage.setItem(DISPONIBLE, totalDisponible.toString())
    setDisponible(totalDisponible)
  }, [readingList])

  const removeFromReadingList = useCallback((product) => {
    const removeBook = readingList.filter((item) => item.ISBN !== product.ISBN)
    setReadingList(removeBook)
    window.localStorage.setItem(READING_STORAGE, JSON.stringify(removeBook))

    let totalDisponible = window.localStorage.getItem(DISPONIBLE)
    totalDisponible = (parseInt(totalDisponible) + 1)
    window.localStorage.setItem(DISPONIBLE, totalDisponible.toString())
    setDisponible(totalDisponible)
  }, [readingList])

  useEffect(() => {
    window.localStorage.setItem(READING_STORAGE, JSON.stringify(readingList))
  }, [readingList])

  useEffect(() => {
    window.localStorage.setItem(DISPONIBLE, disponible.toString())
  }, [disponible])

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === READING_STORAGE) {
        const newValue = JSON.parse(event.newValue)
        setReadingList(newValue)
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  useEffect(() => {
    const handleDisponibleChange = (event) => {
      if (event.key === 'disponible') {
        const newValue = +event.newValue
        window.localStorage.setItem(DISPONIBLE, newValue.toString())
        setDisponible(newValue)
      }
    }

    window.addEventListener('storage', handleDisponibleChange)

    return () => {
      window.removeEventListener('storage', handleDisponibleChange)
    }
  }, [])

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
