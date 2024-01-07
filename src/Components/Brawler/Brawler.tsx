import { useEffect, useState } from "react"
import { Link, useParams } from "wouter"
import { BrawlerInterface } from "../../interfaces/brawler"
import { getBrawler } from "../../Utils"
import Loading from "../Atoms/Loading"
import Powers from "../Atoms/Powers"
import './styles.css'

const Brawler = () => {
  const [brawler, setBrawler] = useState({} as BrawlerInterface)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { id } = useParams()

  useEffect(() => {
    setIsLoading(true)
    getBrawler(id!)
      .then(res => setBrawler(res))
      .finally(() => setIsLoading(false))
  }, [id])

  const cutText = (text: string) => {
    if (text.length > 150) {
      const splitText = text.split('.', 2)
      return `${splitText.join('.')}.`
    }
    return text
  }

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && Boolean(Object.values(brawler).length) &&
        <div className="brawler-container">
          <div className="arrows-container">
            <Link href={`/brawler/${Number(id) - 1}`} >
              <button className="arrow-left">
                <svg 
                  width="24px" 
                  height="24px" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg" 
                  color="currentColor"
                >
                  <path d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Prev Brawler
              </button>
            </Link>
            <Link href={`/brawler/${Number(id) + 1}`} >
              <button className="arrow-right">
                Next Brawler
                <svg 
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                >
                  <path 
                    d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                  </path>
                </svg>
              </button>
            </Link>
          </div>
          <div className="container">
            <section className="info-container">
              <img
                className="image"
                src={brawler.imageUrl2}
                alt={brawler.name}
                style={{border: `10px solid ${brawler.rarity.color}`}}
              />
              {/* <div style={{ backgroundColor: brawler.rarity.color }} className="test">
                <h2>{brawler.name}</h2>
                <span className="class">{brawler.class.name}</span>
                <span style={{color: brawler.rarity.color}}>{brawler.rarity.name}</span> 
              </div> */}
              <div className="info">
                <h2>{brawler.name}</h2>
                <span className="description">{cutText(brawler.description)}</span>
                <span className="class">{brawler.class.name}</span>
                <span className='rarity' style={{color: brawler.rarity.color}}>{brawler.rarity.name}</span>
                <div className="powers">
                  {[...brawler.starPowers, ...brawler.gadgets].map(gadget => <Powers key={gadget.id} power={gadget} tooltip />)}
                </div>
              </div>
            </section>
          </div>
        </div>
      }
    </>
  )
}

export default Brawler