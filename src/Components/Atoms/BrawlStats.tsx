import { Link } from 'wouter'
import { MapStat } from '../../interfaces/maps'

const BrawlStats = ({stats}: {stats: MapStat[]}) => {
  return (
    <div className='top-brawlers'>
      {stats.map(stat => 
        <Link key={stat.name} href={`/brawler/${stat.brawlerId}`}>
          <img  src={stat.image} alt={stat.name} />
        </Link>
      )}
    </div>
  )
}

export default BrawlStats