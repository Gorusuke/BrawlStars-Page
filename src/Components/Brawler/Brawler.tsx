import { BrawlerInterface } from "../../interfaces/brawler"
import Powers from "../Atoms/Powers"
import './styles.css' 

function Brawler({brawler}: {brawler: BrawlerInterface}) {
  return (
    <div className="brawler">
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
            {brawler.starPowers.map(power => <Powers key={power.id} power={power} className="powers-image" />)}
            {brawler.gadgets.map(gadget => <Powers key={gadget.id} power={gadget} className="powers-image" />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brawler