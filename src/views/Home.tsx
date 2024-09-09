import { useContext, useState, useEffect } from 'react'
import { ContextBooks } from '../context/ContextBooks'
import { GiMushroomGills } from 'react-icons/gi'
import SelectGenres from '../components/SelectGenres'
import { useNavigate } from 'react-router-dom'
import loader from '../assets/images/loader.svg'

const Home: React.FC = () => {
  const { genres, selectedGenre, setSelectedGenre, bloomBookFunc } =
    useContext(ContextBooks)
  const navigate = useNavigate()
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false)

  useEffect(() => {
    setSelectedGenre('')
  }, [setSelectedGenre])

  const handleBloomBookClick = async () => {
    setIsButtonActive(true)
    await bloomBookFunc()
    navigate('/selection')
    setIsButtonActive(false)
  }

  return (
    <main className="home">
      <div className="home__wrapper wrapper">
        <h1 className="home__wrapper--title title">
          Library<span className="curved-underline">Blooms</span>
        </h1>

        <h2 className="home__wrapper--subtitle subtitle">
          LibraryBlooms is a space dedicated to the discovery and rediscovery of
          books of all genres.
        </h2>

        <section className="home__wrapper--description text">
          The BloomBook is a button with the power to offer you a selection of 4
          books to discover :{')'}
        </section>

        <SelectGenres
          genres={genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />

        <button
          className="home__wrapper--bloombook bloombook"
          aria-label="Get selection of books"
          disabled={isButtonActive}
          onClick={handleBloomBookClick}
        >
          BloomBook <GiMushroomGills />
        </button>

        {isButtonActive && (
          <section className="home__wrapper--loader">
            <img src={loader} alt="A loader icon to in wait of results" />
          </section>
        )}
      </div>
    </main>
  )
}

export default Home
