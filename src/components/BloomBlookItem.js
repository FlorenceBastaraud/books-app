import PropTypes from "prop-types"

function BloomBookItem({id, title, authors, image_url}){
  return (
    <div className="random-book-card">
      <img className="random-book-card-img" src={image_url} alt={`Book cover of ${title}`}/>
      <button className="random-book-card-cta">Détails</button>
    </div>
  )
}

BloomBookItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired
}


export default BloomBookItem