import React, { ChangeEvent } from 'react'
import { Genre } from '../utils/types'

interface SelectGenresProps {
  genres: Genre[]
  selectedGenre: string
  setSelectedGenre: (genre: string) => void
}

const SelectGenres: React.FC<SelectGenresProps> = ({
  genres,
  selectedGenre,
  setSelectedGenre,
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value)
  }

  return (
    <section className="home__wrapper--select-genres select-genres">
      <label className="text curved-underline" htmlFor="genre-select">
        Select a genre:
      </label>
      <select
        className="text"
        id="genre-select"
        value={selectedGenre}
        onChange={handleChange}
      >
        <option value="all">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.displayName}
          </option>
        ))}
      </select>
    </section>
  )
}

export default SelectGenres
