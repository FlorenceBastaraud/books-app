import { ContextBooks } from "../context/ContextBooks"
import { useContext } from "react"

function Favorites(){
  const {favorites} = useContext(ContextBooks)

  const favBooksElements = favorites.map(book => (
    <div key={book.id}>{book.title} | {book.authors}</div>
  ))

  return (
      <div className="page favorites">
        <h1>Mes Favoris</h1>
        {favBooksElements}
      </div>
  )
}


export default Favorites