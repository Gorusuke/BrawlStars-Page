import { useEffect, useState } from 'react'
import { useParams } from 'wouter'
import { getAllGameModes } from '../../Utils'
import { GameMode } from '../../interfaces/gameModes'
import Loading from '../Atoms/Loading'
import Tooltip from '../Atoms/Tooltip'
import './styles.css'

const GameModes = () => {
  const [gameModes, setGameModes] = useState<GameMode[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { id } = useParams()
  
  useEffect(() => {
    setIsLoading(true)
    getAllGameModes()
      .then(res => setGameModes(res.list))
      .finally(() => setIsLoading(false))
  }, [id])

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && 
        <>
          <h1 className='title'>Game Modes</h1>
          <section className='game-card-container'>
            {gameModes.map(gameMode => (
              <div key={gameMode.scId} className='game-card'>
                <div className='game-card-info' style={{ backgroundColor: gameMode.bgColor }}>
                  <div>
                    <img className='game-card-image' src={gameMode.imageUrl} alt={gameMode.name} />
                    <h3>{gameMode.name}</h3>
                  </div>
                  <Tooltip title={gameMode.tutorial} high='40px'>
                    <img className='card-image-container' src='https://cdn-old.brawlify.com/icon/Info-Round.png' alt="info" />
                  </Tooltip>
                </div>
                <img className='game-background' src={gameMode.imageUrl2} alt={gameMode.name} />
              </div>
            ))}
          </section>
        </>
      }
    </>
  )
}

export default GameModes