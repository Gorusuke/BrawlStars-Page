import { useEffect, useState } from "react"
import { Link } from 'wouter'
import Powers from "../Atoms/Powers"
import Loading from "../Atoms/Loading"
import Filters from "../Atoms/Filters"
import BrawlerByType from "../BrawlersByType/BrawlersByType"
import { BrawlerInterface } from "../../interfaces/brawler"
import { filterBrawlers, getAllBrawlers } from "../../Utils"
import { ALL } from "../../Utils/constants"
import './styles.css' 

function Brawlers() {
  const [brawlers, setBrawlers] = useState<BrawlerInterface[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [filterBy, setFilterBy] = useState<string>('All')

  useEffect(() => {
    setIsLoading(true)
    getAllBrawlers()
      .then(res => setBrawlers(res))
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) return <Loading />

  return (
    <>
      <Filters setText={setText} filterBy={filterBy} setFilterBy={setFilterBy} />
      <h1 className='title'>Brawlers</h1>
      <section className={filterBy !== ALL ? '' : "brawlers-container"}>
        {filterBy !== ALL && <BrawlerByType brawlers={brawlers} selection={filterBy} />}
        {filterBy === ALL && filterBrawlers(brawlers, text).map(brawler => {
          const powersAndGadgets = [...brawler.starPowers, ...brawler.gadgets]
          return (
            <div
              className="brawler"
              style={{border: `4px solid ${brawler.rarity.color}`}}
              key={brawler.id}
            >
              <Link href={`/brawler/${brawler.id}`}>
                <section className="container">
                  <img
                    className="image"
                    src={brawler.imageUrl2}
                    alt={brawler.name}
                  />
                  <div className="info">
                    <h3>{brawler.name}</h3>
                    <span className="class">{brawler.class.name}</span>
                    <span style={{color: brawler.rarity.color}}>{brawler.rarity.name}</span>
                    <div className="powers">
                      {powersAndGadgets.map(gadget => <Powers key={gadget.id} power={gadget} className="powers-image" />)}
                    </div>
                  </div>
                </section>
              </Link>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Brawlers