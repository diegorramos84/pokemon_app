import React, { useState } from 'react'
import { PokeData } from '..'

const SearchForm = () => {
  const [inputName, setInputName] = useState('')
  const [pokeData, setPokeData] = useState('')
  const [loading, setLoading] = useState(true)

  const handleChange = (e) => {
    setInputName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputName}`)
      const data = await result.json()
      setLoading(false)
      setPokeData(data)
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pokemon-name">Name</label>
      <input
        type="text"
        id='pokemon-name'
        value={inputName}
        className='pokemon-name'
        onChange={handleChange}
        />
        <input type="submit" value="Catch it!"/>
        {
          pokeData
          ? <PokeData pokeData={pokeData}/>
          : 'No Data'
        }

    </form>
  )
}

export default SearchForm
