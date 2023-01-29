import { ContextBooks } from "../context/ContextBooks"
import { useContext } from "react"


function Library(){
  const {allBooks} = useContext(ContextBooks)
  
  const allBooksElements = allBooks.map(book => (
    <div key={book.id}>{book.title} | {book.authors}</div>
  ))

  return (
      <div className="page library">
        <h1>Bibliotèque</h1>
        {allBooksElements}
      </div>
  )
}


export default Library