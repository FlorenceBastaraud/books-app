import { useParams, useNavigate } from "react-router-dom"
import { ContextBooks } from "../context/ContextBooks"
import { useContext, useState } from "react"
import {AiOutlineStar, AiFillStar, AiOutlineArrowLeft} from "react-icons/ai"

function BookDetails(){
  const navigate = useNavigate()
  const {id} = useParams()
  const {allBooks, toggleFavorite} = useContext(ContextBooks)
  const [isFav, setIsFav] = useState(false)
  


  function handleClick(){
    toggleFavorite(theBookDetails)
    setIsFav(prev => !prev)
  }

  function goBack(){
    navigate(-1)
  }



  const theBookDetails = allBooks.find(book => book.id === parseInt(id))

  const favIcon = isFav ? <AiFillStar onClick={handleClick} className="favorite-icon"/> : <AiOutlineStar  onClick={handleClick} className="favorite-icon"/>

  const {title, authors, description, image_url, rating, rating_count, num_pages, genres, Quote1} = theBookDetails

  return (
    <div className="bd-container">
      <aside><AiOutlineArrowLeft className="go-back-icon" onClick={goBack}/></aside>
      <div className="book-details">
        <div className="bd-title-favorite">
        <h2 className="bd-title">{title}</h2>
        {favIcon}
        </div>
        <h3 className="bd-authors">{authors}</h3>
        <div className="bd-stats">
          <span>{rating}</span><span> | {rating_count} notes</span>
        </div>
        <div className="bd-stats">
          <span>{num_pages} pages</span><span> | {genres}</span>
        </div>
        <blockquote><q>{Quote1}</q></blockquote>
        <p>{description}</p>
      </div>
      <div className="bd-cover">
      <img src={image_url} alt={`Book cover of ${title}`}/>
      </div>
    </div>
  )
}


export default BookDetails