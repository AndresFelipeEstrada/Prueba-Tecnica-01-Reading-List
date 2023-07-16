import './products.css'

import { useReadingList } from '../hooks/useReadingList'

export const Products = ({ productList }) => {
  const {
    readingList,
    addToReadingList,
    removeFromReadingList
  } = useReadingList()

  const inListRiding = ({ book }) => {
    return readingList.some(item => item.ISBN === book.ISBN)
  }

  return (
    <>
      <main className='products'>
        <ul className='books-list'>
          {
          productList.map(books => {
            const isListRiding = inListRiding(books)
            return (
              <li key={books.book.ISBN}>
                <h3>{books.book.title}</h3>
                <img src={books.book.cover} alt='' />
                <button onClick={() => isListRiding ? removeFromReadingList(books.book) : addToReadingList(books.book)}>
                  {isListRiding ? 'Quitar de lecturas' : 'Leer'}
                </button>
              </li>
            )
          })
      }
        </ul>

      </main>

    </>
  )
}
