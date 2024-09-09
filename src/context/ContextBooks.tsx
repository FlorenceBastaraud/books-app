import { createContext, useState, useEffect, ReactNode } from 'react'
import getRandomNumbers from '../utils/getRandomNumbers'
import { Genre, Book } from '../utils/types'

interface ContextBooksType {
  genres: Genre[]
  selectedGenre: string
  setSelectedGenre: (genre: string) => void
  books: Book[]
  bloomBookFunc: () => Promise<void>
}

const defaultValue: ContextBooksType = {
  genres: [],
  selectedGenre: '',
  setSelectedGenre: () => {},
  books: [],
  bloomBookFunc: async () => {},
}

export const ContextBooks = createContext<ContextBooksType>(defaultValue)

export const ContextBooksProvider = ({ children }: { children: ReactNode }) => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [selectedGenre, setSelectedGenre] = useState<string>('')
  const [books, setBooks] = useState<Book[]>(() => {
    const savedBooks = localStorage.getItem('books')
    return savedBooks ? JSON.parse(savedBooks) : []
  })

  useEffect(() => {
    const genres: Genre[] = [
      { id: 'g1', name: 'action', displayName: 'Action' },
      { id: 'g2', name: 'adventure', displayName: 'Adventure' },
      { id: 'g3', name: 'biography', displayName: 'Biography' },
      { id: 'g4', name: "children's", displayName: "Children's" },
      { id: 'g5', name: 'classic', displayName: 'Classic' },
      { id: 'g6', name: 'cookbook', displayName: 'Cookbook' },
      { id: 'g7', name: 'diary', displayName: 'Diary' },
      { id: 'g8', name: 'drama', displayName: 'Drama' },
      { id: 'g9', name: 'fantasy', displayName: 'Fantasy' },
      {
        id: 'g10',
        name: 'historical fiction',
        displayName: 'Historical Fiction',
      },
      { id: 'g11', name: 'history', displayName: 'History' },
      { id: 'g12', name: 'horror', displayName: 'Horror' },
      { id: 'g13', name: 'mystery', displayName: 'Mystery' },
      { id: 'g14', name: 'poetry', displayName: 'Poetry' },
      { id: 'g15', name: 'romance', displayName: 'Romance' },
      { id: 'g16', name: 'science fiction', displayName: 'Science Fiction' },
      { id: 'g17', name: 'police', displayName: 'Thriller' },
      { id: 'g18', name: 'travel', displayName: 'Travel' },
      { id: 'g19', name: 'young adult', displayName: 'Young Adult' },
    ]

    setGenres(genres)
  }, [])

  const bloomBookFunc = async () => {
    try {
      let apiUrl = `https://gutendex.com/books/`
      if (selectedGenre) {
        apiUrl += `?topic=${selectedGenre}`
      }
      const response = await fetch(apiUrl)
      const books = await response.json()

      const booksResults = books.results

      const randomIndices = getRandomNumbers(booksResults.length, 4)

      const selectedBooks: Book[] = []

      randomIndices
        .map((index) => booksResults[index])
        .filter((item) => {
          if (item !== undefined) {
            selectedBooks.push({
              id: item.id,
              title: item.title,
              author: item.authors[0].name,
              coverImageUrl: item.formats['image/jpeg'],
              subjects: item.subjects,
            })
          }
        })

      setBooks(selectedBooks)
      localStorage.setItem('books', JSON.stringify(selectedBooks))
    } catch (error) {
      console.error('Error fetching books:', error)
    }
  }

  return (
    <ContextBooks.Provider
      value={{
        genres,
        selectedGenre,
        setSelectedGenre,
        books,
        bloomBookFunc,
      }}
    >
      {children}
    </ContextBooks.Provider>
  )
}
