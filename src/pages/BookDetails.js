import { useParams, useNavigate } from "react-router-dom"
import { ContextBooks } from "../context/ContextBooks"
import { useContext } from "react"

function BookDetails(){
  const navigate = useNavigate()
  const {id} = useParams()
  const {allBooks, addToFavorites, favorites} = useContext(ContextBooks)

  console.log(favorites);

  const theBookDetails = allBooks.find(book => book.id === parseInt(id))

  function goBack(){
    navigate(-1)
  }
  
  const {title, authors, description, image_url, rating, rating_count, num_pages, genres, Quote1} = theBookDetails

  return (
    <div className="bd-container">
      <div className="book-details">
        <h2 className="bd-title">{title}</h2>
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
      <div className="actions">
        <button onClick={() => addToFavorites(theBookDetails)}>Ajouter aux favoris</button>
        <button onClick={goBack}>Retour</button>
      </div>
    </div>
  )
}


export default BookDetails