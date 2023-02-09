import BloomBookItem from "../components/BloomBlookItem"
import { ContextBooks } from "../context/ContextBooks"
import { useContext, useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"

function BloomBookSelection(){
  const {randomBooks, selectedBooks, addToFavorites} = useContext(ContextBooks)
  const [selectedCount, setSelectedCount] = useState(0)
  const btnRef = useRef(null)

  const randomBooksElements = randomBooks.map(book => (
    <BloomBookItem key={book.id} book={book}/>
  ))

  useEffect(() => {
    if(selectedBooks.length === 0){
      btnRef.current.disabled = true
    } else {
      btnRef.current.disabled = false
    }

    setSelectedCount(selectedBooks.length)

  }, [btnRef, selectedBooks, selectedCount])


  function handleClick(){
    selectedBooks.map(book => addToFavorites(book))
  }


  return (
    <section className="page bloom-book-selection">
      <h1 className="bloombookselection-title">Sélection BloomBook</h1>
      <div className="random-books-selection-grid">
      {randomBooksElements}
      </div>
      <Link to="/favorites">
        <button ref={btnRef} className="add-random-books-to-favorites" onClick={handleClick}>Ajouter aux favoris &#40;{selectedCount}&#41;</button>
      </Link>
    </section>
  )
}

export default BloomBookSelection