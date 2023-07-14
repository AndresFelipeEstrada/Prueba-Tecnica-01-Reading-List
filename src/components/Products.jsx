import './products.css'

import { useReadingList } from '../hooks/useReadingList'

export const Products = ({ productList }) => {
  const {
    addToReadingList

  } = useReadingList()

  return (
    <>
      <main className='products'>
        <ul className='books-list'>
          {
          productList.library.map(books => {
            return (
              <li key={books.book.ISBN}>
                <h3>{books.book.title}</h3>
                <img src={books.book.cover} alt='' />
                <button onClick={() => addToReadingList(books.book)}>Por leer</button>
              </li>
            )
          })
      }
        </ul>

      </main>

    </>
  )
}
