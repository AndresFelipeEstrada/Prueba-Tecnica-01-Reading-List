import { ListLectura } from './components/ListaLectura'
import { Products } from './components/Products'
import { useFilter } from './hooks/useFilter'
import initialBooks from './mockas/books.json'

function App () {
  const { filterProducts } = useFilter()

  const filteredProducts = filterProducts(initialBooks.library)
  return (
    <>
      <h1>BOOKS</h1>
      <ListLectura />
      <Products productList={filteredProducts} />
    </>
  )
}

export default App
