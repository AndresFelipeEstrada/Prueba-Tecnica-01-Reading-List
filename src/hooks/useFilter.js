import { useContext } from 'react'
import { FilterProductsContext } from '../context/filterProducts'
import initialBooks from '../mockas/books.json'

export const useFilter = () => {
  const { filter, setFilter, filterProducts } = useContext(FilterProductsContext)
  const filteredProducts = filterProducts(initialBooks.library)

  return { filter, setFilter, filteredProducts }
}
