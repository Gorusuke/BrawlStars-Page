import { StarPower } from "../../interfaces/brawler"

interface Props {
  power: StarPower;
  className: string
}

const Powers = ({power, className}: Props) => {
  return (
    <img
      className={className}
      key={power.id}
      src={power.imageUrl}
      alt={power.name}
    />
  )
}

export default Powers