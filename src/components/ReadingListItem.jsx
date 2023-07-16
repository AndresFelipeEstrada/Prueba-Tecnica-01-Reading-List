export const ReadingListItem = ({ title, cover, deleteToList }) => {
  return (
    <>
      <li>
        <img src={cover} alt={title} />
        <div>
          {/* <strong>{title}</strong> -$ {price * quantity} */}
        </div>
        <footer>
          <small>
            Titulo : {title}
          </small>
          <button onClick={deleteToList}>Eliminar</button>
        </footer>
      </li>
    </>
  )
}
