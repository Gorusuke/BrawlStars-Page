import { useEffect, useState } from 'react'
import { useParams } from 'wouter'
import { getAllGameModes } from '../../Utils'
import { GameMode } from '../../interfaces/gameModes'
import Loading from '../Atoms/Loading'
import './styles.css'
import Tooltip from '../Atoms/Tooltip'

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
                <div className='game-card-info' style={{backgroundColor: gameMode.bgColor}}>
                  <img className='game-card-image' src={gameMode.imageUrl} alt={gameMode.name} />
                  <h3>{gameMode.name}</h3>
                  <div className='game-card-svg-container'>
                    <Tooltip title={gameMode.tutorial} high='35px'>
                      <svg
                        width="26px"
                        height="26px"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#000000"
                      >
                        <path
                          d="M12 11.5V16.5"
                          stroke="#fff"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                        </path>
                        <path
                          d="M12 7.51L12.01 7.49889"
                          stroke="#fff"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                        </path>
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                        </path>
                        </svg>
                    </Tooltip>
                  </div>
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