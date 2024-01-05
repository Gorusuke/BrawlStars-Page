import { StarPower } from "../../interfaces/brawler"

interface Props {
  power: StarPower;
  className?: string;
  tooltip?: boolean;
}

const Powers = ({ power, className = 'powers-image', tooltip }: Props) => {
  return (
    <>
      {!tooltip &&
        <img
          className={className}
          src={power.imageUrl}
          alt={power.name}
        />
      }
      {tooltip &&
        <div className="tooltip">
          <div className="tooltip-content">
            <span><b>{power.name}</b></span>
            <span>{power.description}</span>
          </div>
          <img
            className={className}
            src={power.imageUrl}
            alt={power.name}
          />
        </div>
      }
    </>
  )
}

export default Powers