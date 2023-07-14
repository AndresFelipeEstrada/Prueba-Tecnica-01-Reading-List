import './products.css'

export const Products = ({ productList }) => {
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
                <button>Por leer</button>
              </li>
            )
          })
      }
        </ul>

      </main>

    </>
  )
}
