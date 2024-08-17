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
    setSelectedBooks([])
    setRandomBooks(getRandomBooks())
  }

  function filterRandomBooks(id){
    if(favorites.some(fav => fav.id === id)){
      setRandomBooks(prev => [...prev.filter(b => b.id !== id)])
      setSelectedBooks(prev => [...prev.filter(b => b.id !== id)])
    }
  }


  function addToFavorites(book){
    if(favorites.every(fav => fav.id !== book.id)){
      setFavorites(prev => [...prev, book])
    }
  }

  function toggleFavorite(book){
    if(favorites.every(fav => fav.id !== book.id)){
      setFavorites(prev => [...prev, book])
    } else {
      setFavorites(prev => prev.filter(fav => fav.id !== book.id))
    }
  }

  function selectBook(id){
    if(selectedBooks.every(book => book.id !== id)){
      setSelectedBooks(prev => [...prev, randomBooks.find(book => book.id === id)])
    } else {
      setSelectedBooks(prev => prev.filter(book => book.id !== id))
    }
  }


  function localStorageState(favorites){
    let localStFavoriteBooks = localStorage.setItem('favoritesBooks', JSON.stringify(favorites));
    return localStFavoriteBooks;
  }

  function getLocalStorageState(){
    let getLocalStFavoriteBooks = JSON.parse(localStorage.getItem('favoritesBooks'));
    return getLocalStFavoriteBooks;
  }

  localStorageState(favorites);

  if(Object.keys(favorites).length > 1){
    console.log(getLocalStorageState());
  }

  return (
    <ContextBooks.Provider value={{
          allBooks, 
          randomBooks, 
          bloomBlookFunc, 
          addToFavorites,
          selectBook, 
          selectedBooks,
          favorites,
          toggleFavorite,
          filterRandomBooks
      }}> 
      {children}
    </ContextBooks.Provider>
  )
}

export {ContextBooksProvider, ContextBooks}