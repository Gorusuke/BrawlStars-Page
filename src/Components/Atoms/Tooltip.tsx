import { ReactNode } from "react";
import './atom-styles.css'

interface TooltipProps {
  children: ReactNode;
  title: string;
  description?: string;
  community?: boolean;
  high?: string;
}

const Tooltip = ({ children, title, description, community = false, high = '65px' }: TooltipProps) => {
  return (
    <div className="tooltip">
      <div style={{bottom: high}} className="tooltip-content">
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