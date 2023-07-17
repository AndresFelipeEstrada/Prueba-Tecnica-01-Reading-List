/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState, useMemo, useCallback } from 'react'

export const FilterProductsContext = createContext()

export const FilterProductsProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    minPages: 0,
    category: 'all'
  })

  const filterProducts = useCallback((products) => {
    return products.filter(product => {
      return (
        product.book.pages >= filter.minPages &&
        (filter.category === 'all' ||
            product.book.genre === filter.category)
      )
    })
  }, [filter])

  const value = useMemo(
    () => ({
      filter,
      setFilter,
      filterProducts
    }), [filter, filterProducts]
  )
  return (
    <FilterProductsContext.Provider value={value}>
      {children}
    </FilterProductsContext.Provider>
  )
}
