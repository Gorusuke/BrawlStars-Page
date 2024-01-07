import { Link } from "wouter"
import { AllTypes, BrawlerInterface } from "../../interfaces/brawler"
import { FilterByRarity } from "../../Utils"
import './styles.css'

const BrawlerByRarity = ({ brawlers, selection }: { brawlers: BrawlerInterface[], selection: string }) => {
  const result: AllTypes = FilterByRarity(brawlers, selection)
  const rarityNames = Object.keys(result)

  return (
    <>
      {rarityNames.map((name) => (
        <section className="types-container" key={name}>
          <h2>{name}</h2>
          <div className="image-container">
            {result[name as keyof AllTypes].map((brawler: BrawlerInterface) => (
              <Link  key={brawler.id} href={`/brawler/${brawler.id}`}>
                <img
                  className="images"
                  style={{border: `4px solid ${brawler.rarity.color}`}}
                  src={brawler.imageUrl2}
                  alt={brawler.name}
                />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

export default BrawlerByRarity