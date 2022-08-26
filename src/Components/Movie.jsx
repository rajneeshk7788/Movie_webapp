import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContaxt } from './Contaxt'

const Movie = () => {
  const { movie } = useGlobalContaxt();

  return (
    <>
      <section className='movie-page'>
        <div className='grid grid-4-col'>{movie.map((curMovie) => {
          const { imdbID, Title, Poster } = curMovie;

          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className='card'>
                <div className='card-info'>
                  <h6>{Title}</h6>
                  <img src={Poster} alt="IMG not found" />
                </div>
              </div>
            </NavLink>

          )
        })} </div>
      </section>

    </>
  )
}

export default Movie