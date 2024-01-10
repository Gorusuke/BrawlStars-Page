import { useEffect, useState } from 'react'
import { Events } from '../../interfaces/events'
import { getAllEvents } from '../../Utils'
import Loading from '../Atoms/Loading'
import './styles.css'

const Events = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [brawlEvents, setBrawlEvents] = useState<Events>({} as Events)

  useEffect(() => {
    setIsLoading(true)
    getAllEvents()
      .then(res => setBrawlEvents(res))
      .finally(() => setIsLoading(false))
  }, [])

  const getDate = (eventDate: string, now: string) => {
    const date1 = new Date(now)
    const date2 = new Date(eventDate)
    const diff = ((date2.getTime() - date1.getTime()) / 1000) / 60
    const result = Math.abs(Math.round(diff))
    return (result / 60).toString().split('.');
  }

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && Object.keys(brawlEvents).length &&
        <>
          <h1 className='title'>Events</h1>
          <section className='event-container'>
            <h2>Active</h2>
            <div className='event-card-container'>
              {brawlEvents.active.map(brawlEvent => {
                const now = new Date().toLocaleString("en-US")
                const eventDate = new Date(brawlEvent.endTime).toLocaleString("en-US")
                const [diffHour, diffMinutes] = getDate(eventDate, now)
                const hour = Number(diffHour)
                const minutes = Math.floor(Number('0.' + diffMinutes) * 60)
                return (
                    <div key={brawlEvent.map.id} className='card-container'>
                      <div className='event-card-container-info'>
                        <span className='event-time'>New Event in: {`${hour}h ${minutes}m`}</span>
                        <img className='event-card-background' src={brawlEvent.map.environment.imageUrl} alt={brawlEvent.map.environment.name} />
                        <div className='event-card-info' style={{ backgroundColor: brawlEvent.map.gameMode.bgColor }}>
                          <img className='event-card-image' src={brawlEvent.map.gameMode.imageUrl} alt={brawlEvent.map.gameMode.name} />
                          <div className='event-card-title'>
                            <h3>{brawlEvent.map.gameMode.name.toUpperCase()}</h3>
                            <span>{brawlEvent.map.name}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        Siguiente Seccion
                      </div>
                    </div>
                )
              })}
            </div>
          </section>
        </>
      }
    </>
  )

//   return (
//     <>
//       {isLoading && <Loading />}
//       {!isLoading && 
//         <>
//           <h1 className='title'>Events</h1>
//           <section>
//             {Object.entries(brawlEvents).map(brawlEvent => {
//               const [title, events] = brawlEvent
//               return (
//                 <section key={title} className='event-container'>
//                   <h2>{title}</h2>
//                   <div className='event-card-container'>
//                     {events.map((event: Active | Upcoming) => {
//                       const now = new Date().toLocaleString("en-US")
//                       const eventDate = new Date(event.endTime).toLocaleString("en-US")
//                       const [diffHour, diffMinutes] = getDate(eventDate, now)
//                       const hour = Number(diffHour)
//                       const minutes = Math.floor(Number('0.' + diffMinutes) * 60)
//                       return (
//                         <div key={event.map.id} className='card-container' >
//                           <div className='event-card-container-info'>
//                             <span className='event-time'>New Event in: {`${hour}h ${minutes}m`}</span>
//                             <img className='event-card-background' src={event.map.environment.imageUrl} alt={event.map.environment.name} />
//                             <div className='event-card-info' style={{ backgroundColor: event.map.gameMode.bgColor }}>
//                               <img className='event-card-image' src={event.map.gameMode.imageUrl} alt={event.map.gameMode.name} />
//                               <div className='event-card-title'>
//                                 <h3>{event.map.gameMode.name.toUpperCase()}</h3>
//                                 <span>{event.map.name}</span>
//                               </div>
//                             </div>
//                           </div>
//                           <div>
//                             Siguiente Seccion
//                           </div>
//                         </div>
//                       )
//                     })}
//                   </div>
//                 </section>
//               )
//             })}
//           </section>
//         </>
//       }
//     </>
//   )
}

export default Events