export const ReadingListItem = ({ title, cover, addToList }) => {
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
          <button onClick={addToList}>+</button>
        </footer>
      </li>
    </>
  )
}
