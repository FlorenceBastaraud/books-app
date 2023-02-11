import PropTypes from "prop-types"
import { useContext, useEffect } from "react"
import { ContextBooks } from "../context/ContextBooks"
import { useState } from "react"
import { Link } from "react-router-dom"


function BloomBookItem({book}){
  const {selectBook, selectedBooks} = useContext(ContextBooks)
  const {id, title, image_url} = book
  const [isChecked, setIsChecked] = useState(true)

 
  function handleChange(){
    selectBook(id)
    setIsChecked(prev => !prev)
  }

  useEffect(() => {
    if(selectedBooks.find(sbook => sbook.id === id)){
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [selectedBooks, id])



  return (
    <div className="random-book-card">
      <img className="random-book-card-img" src={image_url} alt={`Book cover of ${title}`}/>
      <button className="random-book-card-cta"><Link to={`/library/${id}`}>Voir fiche</Link></button>
      <input className="random-book-card-checkbox" type="checkbox" checked={isChecked} onChange={handleChange}/>
    </div>
  )
}

BloomBookItem.propTypes = {
  book: PropTypes.object.isRequired
}


export default BloomBookItem