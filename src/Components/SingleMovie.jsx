import React, { useState, useEffect, useReducer } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { API_URL } from './Contaxt'


const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
}


const SingleMovie = () => {
  const { id } = useParams()
  // const [count, setCount] = useState(0)
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setMovie(data)
      }

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`)
    }, 200);
    return () => clearTimeout(timerOut)
  }, [id])

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title"><span className='title-name'>Title:</span> {movie.Title}</p>
          <p className="card-text"><span className='title-name'>Released:</span> {movie.Released}</p>
          <p className="card-text"><span className='title-name'>Genre:</span> {movie.Genre}</p>
          <p className="card-text"><span className='title-name'>Rating:</span> {movie.imdbRating} / 10</p>
          <p className="card-text"><span className='title-name'>Country:</span> {movie.Country}</p>
          <p><span className='title-name'>Like:</span> {state} </p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
          <button className='like' onClick={(e) => dispatch({ type: "INCREMENT" })}>Like</button>
          <button className='like' onClick={(e) => dispatch({ type: "DECREMENT" })}>UnLike</button>
        </div>
      </div>
    </section>
  )
}

export default SingleMovie