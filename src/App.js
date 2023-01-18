import { useState, useEffect } from "react";

export default function App() {

  const [books, setBooks] = useState([])


  useEffect(() => {

    async function getBooks(){

      const endpoint = new URL("https://gutendex.com/books/")
      endpoint.searchParams.set("topic", "food")
      const response = await fetch(endpoint)
      if(response.status !== 200) console.log("erreurrrrrr")
      const data = await response.json()
      setBooks(data)

    }

    getBooks()
  
  }, [])

  const booksEl = books.results.map(book => (
      <p>{book.title} written by {book.authors[0].name}</p>
  ))

  return (
    <div className="container">
      <h1>Books App</h1>
      <div>{booksEl}</div>
    </div>
  );
}

