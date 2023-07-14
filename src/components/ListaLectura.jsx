import { useReadingList } from '../hooks/useReadingList'
import { CartIcon } from './Icons'
import { ReadingListItem } from './ReadingListItem'
import './listalectura.css'

export const ListLectura = () => {
  const {
    readingList,
    addToReadingList
  } = useReadingList()

  return (

    <div>
      <label htmlFor='cart' className='lectura-button '>
        <CartIcon />
      </label>
      <input id='cart' type='checkbox' hidden />

      <aside className='lectura'>
        {
          readingList.map(item => (
            <ReadingListItem
              key={item.ISBN}
              addToList={() => addToReadingList(item)}
              {...item}
            />
          ))
        }

      </aside>
    </div>

  )
}
