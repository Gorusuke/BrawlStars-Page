import { useEffect, useState } from "react"
import { Link } from 'wouter'
import Powers from "../Atoms/Powers"
import { BrawlerInterface } from "../../interfaces/brawler"
import './styles.css' 
import Loading from "../Atoms/Loading"

function Brawlers() {
  const [brawlers, setBrawlers] = useState<BrawlerInterface[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://api.brawlapi.com/v1/brawlers')
      .then(res => res.json())
      .then(res => {
        const { list } = res
        const listSorted = [...list]
          .sort((a: BrawlerInterface, b: BrawlerInterface) => a.id - b.id)
        setBrawlers(listSorted)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    isLoading
      ? <Loading />
      : brawlers.map(brawler => {
        const powersAndGadgets = [...brawler.starPowers, ...brawler.gadgets]
        return (
          <div
            className="brawler"
            key={brawler.id}
          >
            <Link href={`/brawler/${brawler.id}`}>
              <div className="container">
                <img
                  className="image"
                  src={brawler.imageUrl2}
                  alt={brawler.name}
                />
                <div className="info">
                  <h3>{brawler.name}</h3>
                  <span>{brawler.class.name}</span>
                  <span>{brawler.rarity.name}</span>
                  <div className="powers">
                    {powersAndGadgets.map(gadget => <Powers key={gadget.id} power={gadget} className="powers-image" />)}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      })
  )
}

export default Brawlers