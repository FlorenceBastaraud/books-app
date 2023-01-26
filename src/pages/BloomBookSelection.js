import BloomBookItem from "../components/BloomBlookItem"
import { ContextBooks } from "../context/ContextBooks"
import { useContext } from "react"

function BloomBookSelection(){
  const {randomBooks} = useContext(ContextBooks)
  console.log(randomBooks)
  const randomBooksElements = randomBooks.map(book => (
    <BloomBookItem key={book.id} {...book}/>
  ))



  return (
    <section className="page bloombookselection">
      <h1 className="bloombookselection-title">Sélection BloomBook</h1>
      <div className="random-books-selection-grid">
      {randomBooksElements}
      </div>
      <button>Ajouter les {randomBooks.length} livres aux favoris</button>
    </section>
  )
}

export default BloomBookSelection