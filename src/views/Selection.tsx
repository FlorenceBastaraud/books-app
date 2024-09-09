import { useContext, useState, useEffect } from 'react'
import { ContextBooks } from '../context/ContextBooks'
import BookItem from '../components/BookItem'
import { GiMushroomGills } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

const BloomBookSelection: React.FC = () => {
  const { books, selectedGenre } = useContext(ContextBooks)
  const [emails, setEmails] = useState<string[]>([])
  const [emailMessage, setEmailMessage] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    if (books.length < 1) {
      return navigate('/')
    }
    const booksRecs = books.map((book) => `- ${book.title}`)
    const booksRecsString = booksRecs.join('\n')

    const message = `Hey,\n\nHere's a list of ${selectedGenre} book recommendations from LibraryBlooms:\n\n${booksRecsString}\n\nEnjoy! :)`

    setEmailMessage(message)
  }, [setEmailMessage, selectedGenre, books, navigate])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formElements = e.currentTarget.elements
    const input = formElements.namedItem('email') as HTMLInputElement | null

    if (input && input.value != '') {
      const emailsList = [...emails, input.value]
      const updatedEmailList = new Set(emailsList)

      setEmails(Array.from(updatedEmailList))
    }

    e.currentTarget.reset()
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (e.currentTarget.value != '') {
      setEmailMessage(e.currentTarget.value)
    }
  }

  function handleSend() {
    console.log(location.origin)
    const emailList = emails.join(',')
    const subject = `Books recs${
      ' (' + selectedGenre + ') '
    } from LibraryBlooms`
    const body = emailMessage

    const mailtoLink = `mailto:${emailList}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink

    setTimeout(() => {
      localStorage.removeItem('books')
      navigate('/goodbye')
    }, 3000)
  }

  return (
    <main className="selection">
      <div className="selection__wrapper wrapper">
        <h1 className="selection__wrapper--title title">
          BloomBook <span className="curved-underline">Selection</span>
        </h1>

        <section className="selection__wrapper--description text">
          Here's a selection of{' '}
          {selectedGenre && (
            <span className="curved-underline">{selectedGenre}</span>
          )}{' '}
          books for you, freshly from the BloomBook <GiMushroomGills />
        </section>

        <section className="selection__wrapper--books">
          {books && books.length > 0 ? (
            books.map((book) => <BookItem key={book.id} bookData={book} />)
          ) : (
            <p className="no-books text">
              No books found for the selected genre.
            </p>
          )}
        </section>

        <section className="selection__wrapper--send">
          <form
            className="emails-form curved-underline"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label htmlFor="email">Send to...</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email.address@com"
            />
            <button type="submit" aria-label="Add to email list">
              Add
            </button>
          </form>

          <ul className="emails-list">
            {emails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>

          <textarea
            className={
              emails.length < 1
                ? 'emails-message display-none'
                : 'emails-message'
            }
            defaultValue={emailMessage}
            onChange={(e) => handleChange(e)}
          />

          <button
            className={
              emails.length < 1
                ? 'emails-send-list curved-underline display-none'
                : 'emails-send-list curved-underline'
            }
            onClick={handleSend}
          >
            Send BloomBook list
          </button>
        </section>
      </div>
    </main>
  )
}

export default BloomBookSelection
