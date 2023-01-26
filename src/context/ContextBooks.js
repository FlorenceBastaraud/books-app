import React, {useState, useEffect} from "react";
const ContextBooks = React.createContext()

function ContextBooksProvider({children}){
  const [allBooks, setAllBooks] = useState([])
  const [randomBooks, setRandomBooks] = useState([]) 
  const [favorites, setFavorites] = useState([])
  const [selectedBooks, setSelectedBooks] = useState([])

  useEffect(() => {
    async function fetchAllBooks(){
      const endpoint = new URL("https://example-data.draftbit.com/books")
      endpoint.searchParams.set("_limit", "40")
      const res = await fetch(endpoint)
      if(res.status === 200){
        const data = await res.json()
        setAllBooks(data)
      }
    }
    fetchAllBooks()
  }, [])

  function getRandomBooks(selection = [], i=4){
    if(i <= 0 && selection.length === 4) return selection
    const min = allBooks[0].id
    const max = allBooks[allBooks.length - 1].id
    const idToPick = Math.floor(Math.random() * (max - min + 1) + min)
    const bookToPick = allBooks.find(book => book.id === idToPick)
    if(selection.every(book => book.id !== idToPick)){
      selection.push(bookToPick)
      setSelectedBooks(prev => [...prev, bookToPick])
    }
    return getRandomBooks(selection, i-1)
  }

  function bloomBlookFunc(){
    setRandomBooks(getRandomBooks())
  }


  function addToFavorites(book){
    setFavorites(prev => [...prev, book])
  }

  function selectBook(id){
    if(selectedBooks.every(book => book.id !== id)){
      setSelectedBooks(prev => [...prev, randomBooks.find(book => book.id === id)])
    } else {
      setSelectedBooks(prev => prev.filter(book => book.id !== id))
    }
  }


  return (
    <ContextBooks.Provider value={{
          allBooks, 
          randomBooks, 
          bloomBlookFunc, 
          addToFavorites,
          selectBook, 
          selectedBooks
      }}> 
      {children}
    </ContextBooks.Provider>
  )
}

export {ContextBooksProvider, ContextBooks}