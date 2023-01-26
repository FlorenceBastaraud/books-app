
function BookDetails({book}){

  return (
    <div className="random-book-card">
      <img className="random-book-card-img" src={book.image_url} alt={`Book cover of ${book.title}`}/>
    </div>
  )
}

BookDetails.defaultProps = {
  book: {
    image_url: "",
    title: ""
  }
}


export default BookDetails