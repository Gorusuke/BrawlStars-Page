import BrawlStats from './BrawlStats'
import { Active, Upcoming } from '../../interfaces/events'
import { UPCOMING } from '../../Utils/constants'
import { Link } from 'wouter'
import Tooltip from './Tooltip'

const EventCards = ({ event, title }: {event: Active[] | Upcoming[], title: string}) => {
  const isUpcoming = title.toLowerCase() === UPCOMING
  const getDate = (eventDate: string, now: string) => {
    const date1 = new Date(now)
    const date2 = new Date(eventDate)
    const diff = ((date2.getTime() - date1.getTime()) / 1000) / 60
    const result = Math.abs(Math.round(diff))
    return (result / 60).toString().split('.');
  }

  return (
    <>
      <h2>{title}</h2>
      <div className='event-card-container'>
        {event.map(brawlEvent => {
          const time = isUpcoming ? brawlEvent.startTime : brawlEvent.endTime
          const now = new Date().toLocaleString("en-US")
          const eventDate = new Date(time).toLocaleString("en-US")
          const [diffHour, diffMinutes] = getDate(eventDate, now)
          const hour = Number(diffHour)
          const minutes = Math.floor(Number('0.' + diffMinutes) * 60)
          return (
            <div key={brawlEvent.map.id} className='card-container'>
              <div className='event-card-container-info'>
                <div className='event-time'>
                  <span>New Event in: {`${hour}h ${minutes}m`}</span>
                  <Tooltip title='Click to see the map' high='35px'>
                    <Link href={`/maps/${brawlEvent.map.id}`}>
                      <img src='https://cdn-old.brawlify.com/icon/Info-Round.png' alt="info" />
                    </Link>
                  </Tooltip>
                </div>
                <img className='event-card-background' src={brawlEvent.map.environment.imageUrl} alt={brawlEvent.map.environment.name} />
                <div className='event-card-info' style={{ backgroundColor: brawlEvent.map.gameMode.bgColor }}>
                  <img className='event-card-image' src={brawlEvent.map.gameMode.imageUrl} alt={brawlEvent.map.gameMode.name} />
                  <div className='event-card-title'>
                    <h3>{brawlEvent.map.gameMode.name.toUpperCase()}</h3>
                    <span>{brawlEvent.map.name}</span>
                  </div>
                </div>
              </div>
              <div className='stats-brawlers'>
                <BrawlStats stats={brawlEvent.map.stats} />
                <span>Recommended brawlers for this event</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default EventCards