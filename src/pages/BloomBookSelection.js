import BloomBookItem from "../components/BloomBlookItem"
import { ContextBooks } from "../context/ContextBooks"
import { useContext, useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"

function BloomBookSelection(){
  const {randomBooks, selectedBooks, addToFavorites} = useContext(ContextBooks)
  const [styles, setStyles] = useState("")
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


  }, [btnRef, selectedBooks])

  useEffect(() => {
    setStyles(`gridTemplateColumns: repeat(${randomBooks.length}, 1fr)`)
  }, [randomBooks])



  function handleClick(){
    selectedBooks.map(book => addToFavorites(book))
  }


  return (
    <section className="page bloom-book-selection" style={{styles}}>
      <h1 className="bloombookselection-title">Sélection BloomBook</h1>
      <div className="random-books-selection-grid books-grid">
      {randomBooksElements}
      </div>
      <Link to="/favorites" className="bloombookselection-cta">
        <button ref={btnRef} className="add-random-books-to-favorites" onClick={handleClick}>Ajouter aux favoris &#40;{selectedBooks.length}&#41;</button>
      </Link>
    </section>
  )
}

export default BloomBookSelection