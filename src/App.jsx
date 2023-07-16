import { ListLectura } from './components/ListaLectura'
import { Products } from './components/Products'
import { useFilter } from './hooks/useFilter'
import { useId } from 'react'
import { useReadingList } from './hooks/useReadingList'

function App () {
  const { setFilter, filteredProducts } = useFilter()
  const { disponible } = useReadingList()

  const categoryId = useId()

  const handleChangeCategory = (e) => {
    setFilter(prevState => ({
      category: e.target.value
    }))
  }

  return (

    <>
      <h1>BOOKS</h1>
      <ListLectura />
      <section>
        <label htmlFor={categoryId}>Selecciona una categoria:  </label>
        <select id={categoryId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='Fantasía'>Fantasia</option>
          <option value='Ciencia ficción'>Ciencia ficción</option>
          <option value='Zombies'>Zombies</option>
          <option value='Terror'>Terror</option>
        </select>
      </section>
      <p>Libros disponibles: {disponible}
      </p>
      <Products productList={filteredProducts} />
    </>
  )
}

export default App
