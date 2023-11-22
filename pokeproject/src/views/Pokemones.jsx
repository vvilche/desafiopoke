import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Form, Button , Alert} from 'react-bootstrap/'

const ApiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch(ApiUrl)
        const data = await response.json()
        setPokemones(data.results)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const handleVerDetalles = () => {
    if (!selectedPokemon) {
      alert('Debes seleccionar un Pokémon para ver sus detalles.');
      return;
    }
  
    const pokemonNumber = parseInt(selectedPokemon.split('/')[6]);
    navigate(`/pokemones/${pokemonNumber}`);
  };




  return (
    <>
      <div className='selector'>
        <h1>Selecciona tu pokemon</h1>
        <Form.Select aria-label='Default select example' onChange={(e) => setSelectedPokemon(e.target.value)}>
          <option>Seleccionar tu Pokémon</option>
          {pokemones.map((pokemon) => (
            <option key={pokemon.url} value={pokemon.url}>
              {pokemon.name}
            </option>
          ))}
        </Form.Select>
        <Button className='mt-3' variant='dark' onClick={handleVerDetalles}>Ver detalles</Button>
      </div>
    </>
  )
}

export default Pokemones