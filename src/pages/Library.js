import { ContextBooks } from "../context/ContextBooks"
import { useContext } from "react"


function Library(){
  const {allBooks} = useContext(ContextBooks)
  
  const allBooksElements = allBooks.map(book => (
        <div key={book.id} className="books-grid-card">
          <img src={book.image_url} alt={book.title} className="books-grid-card-img"/>
          <p>{book.title}</p>
          <p>{book.authors}</p>
      </div>
  ))

  return (
      <div className="page library">
        <h1>Bibliotèque</h1>
        <div className="library-grid books-grid">
          {allBooksElements}
        </div>
      </div>
  )
}


export default Library