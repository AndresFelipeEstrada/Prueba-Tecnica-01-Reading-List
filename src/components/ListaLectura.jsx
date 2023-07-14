import { CartIcon } from './Icons'
import './listalectura.css'

export const ListLectura = () => {
  return (
    <>
      <label htmlFor='cart' className='lectura-button '>
        <CartIcon />
      </label>
      <input id='cart' type='checkbox' hidden />

      <aside className='lectura'>
        <img src='' alt='' />
        <div className='clear-button'>
          <button>Eliminar</button>
        </div>
      </aside>
    </>
  )
}
