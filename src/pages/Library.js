import { ContextBooks } from "../context/ContextBooks"
import { useContext } from "react"


function Library(){
  const {allBooks} = useContext(ContextBooks)
  
  const allBooksElements = allBooks.map(book => (
        <div key={book.id}>
          <img src={book.image_url} alt={book.title}/>
          <p>{book.title}</p>
          <p>{book.authors}</p>
      </div>
  ))

  return (
      <div className="page library">
        <h1>Bibliotèque</h1>
        <div className="library-grid">
          {allBooksElements}
        </div>
      </div>
  )
}


export default Library