import { ReactNode } from "react";
import './atom-styles.css'

interface TooltipProps {
  children: ReactNode;
  title: string;
  description: string;
  community?: boolean;
}

const Tooltip = ({children, title, description, community = false}: TooltipProps) => {
  return (
    <div className="tooltip">
      <div style={{bottom: community ? '45px' : '65px'}} className="tooltip-content">
        <span>
          {community ? title : <b>{title}</b>}
        </span>
        <span>
          {community
            ? <>Concept by: <b>{description}</b></>
            : description
          }
        </span>
      </div>
      {children}
    </div>
  )
}

export default Tooltip