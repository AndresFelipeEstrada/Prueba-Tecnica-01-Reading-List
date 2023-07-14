import { ListLectura } from './components/ListaLectura'
import { Products } from './components/Products'
import initialBooks from './mockas/books.json'

function App () {
  return (
    <>
      <h1>BOOKS</h1>
      <ListLectura />
      <Products productList={initialBooks} />
    </>
  )
}

export default App
