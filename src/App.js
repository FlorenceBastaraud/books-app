import { useState, useEffect } from "react";

export default function App() {

  const [books, setBooks] = useState([])


  useEffect(() => {

    async function getBooks(){

      const endpoint = new URL("https://gutendex.com/books/")
      endpoint.searchParams.set("page", "1")
      endpoint.searchParams.set("topic", "food")
      const response = await fetch(endpoint)
      if(response.status !== 200) console.log("erreurrrrrr")
      const data = await response.json()
      setBooks(data)

    }

    getBooks()
  
  }, [])

  const booksEl = books.results.map(book => (
      <div key={book.id}>
        <h3>Title: {book.title}</h3>
        <h4>Author: {book.authors[0].name}</h4>
        <img src={book.formats["image/jpeg"]} alt={`The cover of the book titled ${book.title}`}/>
      </div>
  ))

  return (
    <div className="container">
      <h1>Books App</h1>
      <input/>
      <div className="books-grid">{booksEl}</div>
    </div>
  );
}

