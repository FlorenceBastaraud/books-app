import { useRef } from 'react'
import { Book } from '../utils/types'
import { gsap } from 'gsap'

interface BookItemProps {
  bookData: Book
}

const BookItem: React.FC<BookItemProps> = ({ bookData }) => {
  const bookItemRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const item = bookItemRef.current
    if (!item) return

    const rect = item.getBoundingClientRect()
    const itemX = rect.left + rect.width / 2
    const itemY = rect.top + rect.height / 2

    const mouseX = e.clientX
    const mouseY = e.clientY

    const deltaX = mouseX - itemX
    const deltaY = mouseY - itemY

    const rotateX = -(deltaY / rect.height) * 30
    const rotateY = (deltaX / rect.width) * 30

    gsap.to(item, {
      duration: 0.5,
      rotateX: rotateX,
      rotateY: rotateY,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    const item = bookItemRef.current
    if (item) {
      gsap.to(item, {
        duration: 0.5,
        rotateX: 0,
        rotateY: 0,
        ease: 'power2.out',
      })
    }
  }

  return (
    <article
      className="book"
      ref={bookItemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="book__details" key={bookData.id}>
        <h2 className="book__details--title subtitle">{bookData.title}</h2>
        <p className="book__details--author">by {bookData.author}</p>
        <ul className="book__details--subjects">
          {bookData.subjects.map((subject, index) => (
            <li className="subject" key={index}>
              {subject}
            </li>
          ))}
        </ul>
      </div>
      <div className="book__cover">
        <img
          className="book__cover--image"
          src={bookData.coverImageUrl || 'https://placehold.co/200'}
          alt={bookData.title}
        />
      </div>
    </article>
  )
}

export default BookItem
