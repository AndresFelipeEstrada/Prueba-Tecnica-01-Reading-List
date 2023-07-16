import { useContext } from 'react'
import { FilterProductsContext } from '../context/filterProducts'

export const useFilter = () => {
  return useContext(FilterProductsContext)
}
