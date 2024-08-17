import { ContextBooks } from "../context/ContextBooks"
import { useContext } from "react"

function Favorites(){
  const {favorites} = useContext(ContextBooks)

  const favBooksElements = favorites.map(book => (
    <div className="favorites-grid-item" key={book.id}>
      <img src={book.image_url} alt={book.title}/>
      <p>{book.title}</p>
      <p>{book.authors}</p>
    </div>
  ))

  return (
      <div className="page favorites">
        <h1>Mes Favoris</h1>
        <div className="favorites-grid">
          {favBooksElements}
        </div>
      </div>
  )
}


export default Favorites