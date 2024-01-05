import { useEffect, useState } from "react"
import { useParams } from "wouter"
import { BrawlerInterface } from "../../interfaces/brawler"
import Loading from "../Atoms/Loading"
import Powers from "../Atoms/Powers"
import './styles.css'

const Brawler = () => {
  const [brawler, setBrawler] = useState({} as BrawlerInterface)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { id } = useParams()

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://api.brawlapi.com/v1/brawlers/${id}`)
      .then(res => res.json())
      .then(res => setBrawler(res))
      .finally(() => setIsLoading(false))
  }, [id])

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && Boolean(Object.values(brawler).length) &&
        <div className="brawler-container">
          <div className="container">
            <section className="info-container">
              <img
                className="image"
                src={brawler.imageUrl3}
                alt={brawler.name}
              />
              <div className="info">
                <h2>{brawler.name}</h2>
                <span>{brawler.description}</span>
                <span>{brawler.class.name}</span>
                <span>{brawler.rarity.name}</span>
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