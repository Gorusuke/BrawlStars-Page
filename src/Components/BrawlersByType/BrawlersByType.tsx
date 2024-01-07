import { Link } from "wouter"
import { AllTypes, BrawlerInterface } from "../../interfaces/brawler"
import { FilterByType } from "../../Utils"
import './styles.css'

const BrawlersByType = ({ brawlers, selection }: { brawlers: BrawlerInterface[], selection: string }) => {
  const result: AllTypes = FilterByType(brawlers, selection)
  const rarityNames = Object.keys(result)

  return (
    <>
      {rarityNames.map((name) => (
        <section className="types-container" key={name}>
          <h2>{name}</h2>
          <div className="image-container">
            { // @ts-expect-error Property map does not exist on type never.
              result[name as keyof AllTypes].map((brawler: BrawlerInterface) => (
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

export default BrawlersByType