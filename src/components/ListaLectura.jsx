import { useReadingList } from '../hooks/useReadingList'
import { CartIcon } from './Icons'
import { ReadingListItem } from './ReadingListItem'
import './listalectura.css'

export const ListLectura = () => {
  const { readingList, removeFromReadingList } = useReadingList()

  return (

    <div>
      <label htmlFor='cart' className='lectura-button '>
        <CartIcon />
      </label>
      <input id='cart' type='checkbox' hidden />

      <aside className='lectura'>
        <h2>Lista de lectura</h2>
        <p>Disponibles para leer: {readingList.length}</p>
        {
          readingList.map(item => (
            <ReadingListItem
              key={`list=item-${item.ISBN}`}
              deleteToList={() => removeFromReadingList(item)}
              {...item}
            />
          ))
        }

      </aside>
    </div>

  )
}
