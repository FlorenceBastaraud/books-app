import { Link, useNavigate } from 'react-router-dom'
import { ContextBooks } from '../context/ContextBooks'
import { useEffect, useContext } from 'react'
import { PiFlowerTulipFill } from 'react-icons/pi'

const Goodbye = () => {
  const { books } = useContext(ContextBooks)
  const navigate = useNavigate()

  useEffect(() => {
    if (books.length < 1) {
      return navigate('/')
    }
  }, [books, navigate])

  return (
    <main className="goodbye">
      <div className="goodbye__wrapper wrapper">
        <h1 className="goodbye__wrapper--title title curved-underline">
          Hooray! <PiFlowerTulipFill />
        </h1>
        <div className="goodbye__wrapper--description text">
          <p>I hope the books selected by our BloomBook will be appreciated.</p>
          <p>
            See you soon? You can also return to the &nbsp;
            <Link to="/" className="curved-underline">
              homepage
            </Link>{' '}
            if you want more book recs!
          </p>
        </div>
      </div>
    </main>
  )
}

export default Goodbye
