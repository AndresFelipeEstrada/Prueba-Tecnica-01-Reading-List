import { ListLectura } from './components/ListaLectura'
import { Products } from './components/Products'
import { useFilter } from './hooks/useFilter'
import { useId } from 'react'
import { useReadingList } from './hooks/useReadingList'

function App () {
  const { filter, setFilter, filteredProducts } = useFilter()
  const { disponible } = useReadingList()

  const categoryId = useId()
  const minPagesId = useId()

  const handleChangeCategory = (e) => {
    setFilter(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  const handleChangeminPages = (e) => {
    setFilter(prevState => ({
      ...prevState,
      minPages: e.target.value
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

      <section>
        <label htmlFor={minPagesId}>Paginas minimo del libro</label>
        <input type='range' id={minPagesId} onChange={handleChangeminPages} value={filter.minPages} min='0' max='5000' />
        <p>{filter.minPages}</p>
      </section>

      <p>Libros disponibles: {disponible}
      </p>
      <Products productList={filteredProducts} />
    </>
  )
}

export default App
