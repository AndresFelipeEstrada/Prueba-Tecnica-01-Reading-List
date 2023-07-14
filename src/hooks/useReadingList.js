import { useContext } from 'react'
import { ReadingListContext } from '../context/ReadingList.jsx'

export function useReadingList () {
  return useContext(ReadingListContext)
}
