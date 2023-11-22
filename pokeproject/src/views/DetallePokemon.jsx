import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const DetallePokemon = () => {
  const [pokemonDetails, setPokemonDetails] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const handlePokemonSelection = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        setPokemonDetails(data)
      } catch (error) {
        console.error('Error fetching Pokémon details:', error)
      }
    }
    handlePokemonSelection()
  }, [id])

  return (
    <>
      {pokemonDetails && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            margin: '2rem'
          }}
        >
          <Card style={{ width: '50rem' }}>
            <Row className='g-0'>
              <Col>
                <Card.Img
                  style={{ width: '450px', margin: '10px' }}
                  variant='top'
                  src={pokemonDetails.sprites.other.dream_world.front_default}
                  alt={`pokemon ${pokemonDetails.name}`}
                />
              </Col>
              <Col>
                <Card.Body className='detalle'>
                  <Card.Title> <h3>Nombre de Pokemon</h3> {pokemonDetails.name}</Card.Title>
                  <ul>
                    {pokemonDetails.stats.map((stat, index) => (
                      <li className='lista' key={index}>
                        {stat.stat.name}: {stat.base_stat}
                      </li>
                    ))}
                  </ul>
                  <p className='tipo'> <h3>Tipo de Pokemon</h3> {pokemonDetails.types[0].type.name}</p>
                  <img
                    style={{ width: '120px', margin: '20px' }}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
                    alt={`gif pokemon ${pokemonDetails.name}`}
                  />
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      )}
    </>
  )
}

export default DetallePokemon