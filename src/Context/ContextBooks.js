import React, {useState, useEffect} from "react";
const ContextBooks = React.createContext()

function ContextBooksProvider({children}){
  const [allBooks, setAllBooks] = useState([])

  useEffect(() => {
    async function fetchAllBooks(){
      const endpoint = new URL("https://example-data.draftbit.com/books")
      endpoint.searchParams.set("_limit", "12")
      const res = await fetch(endpoint)
      if(res.status === 200){
        const data = await res.json()
        setAllBooks(data)
      }
    }
    fetchAllBooks()
  }, [])


  return (
    <ContextBooks.Provider value={{allBooks}}>
      {children}
    </ContextBooks.Provider>
  )
}

export {ContextBooksProvider, ContextBooks}