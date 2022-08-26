import React from 'react'
import { useGlobalContaxt } from './Contaxt'

const Search = () => {
  const { query, setQuery, isError } = useGlobalContaxt()
  return (
    <section className='search'>
      <form action='#' onSubmit={(e) => e.preventDefault()}>
        <div className='search-box'>
          <input type="text" placeholder='Search...'
            value={query}
            onChange={(e) => setQuery(e.target.value)} />
        </div>
      </form>
      <div className='card-error'>
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
  )
}

export default Search