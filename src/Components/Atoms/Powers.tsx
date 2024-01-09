import { StarPower } from "../../interfaces/brawler"
import Tooltip from "./Tooltip";

interface Props {
  power: StarPower;
  className?: string;
  tooltip?: boolean;
}

const Powers = ({ power, className = 'powers-image', tooltip }: Props) => {
  return (
    <>
      {!tooltip && <img className={className} src={power.imageUrl} alt={power.name} /> }
      {tooltip &&
        <Tooltip title={power.name} description={power.description}>
          <img
            className={className}
            src={power.imageUrl}
            alt={power.name}
          />
        </Tooltip>
      }
    </>
  )
}

export default Powers