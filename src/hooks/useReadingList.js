import { useContext } from 'react'
import { ReadingListContext } from '../context/readingList'

export function useReadingList () {
  return useContext(ReadingListContext)
}
