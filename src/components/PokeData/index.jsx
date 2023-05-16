import React from 'react'

const PokeData = (props) => {
  console.log(props.pokeData, 'pokedata')
  const data = props.pokeData
  return (
    <div className='card-container'>
      <div className="poke-card">
        <img src={data.sprites.front_default} alt="image" />
        <p>Name: {data.name}</p>
        <p>Weight:{data.weight}</p>
        <div className='poke-abilities'>
          <p>Abilities: {data.abilities.map((ab, index) =>
          <button>
            {ab.ability.name}
          </button>
            )}
          </p>
        </div>
    </div>

    </div>
  )
}

export default PokeData
