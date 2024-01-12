import { useEffect, useState } from 'react'
import { Events } from '../../interfaces/events'
import { getAllEvents } from '../../Utils'
import Loading from '../Atoms/Loading'
import EventCards from '../Atoms/EventCards'
import './styles.css'

const Events = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [brawlEvents, setBrawlEvents] = useState<Events>({} as Events)

  useEffect(() => {
    setIsLoading(true)
    getAllEvents()
      .then(async res => setBrawlEvents(res))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && Object.keys(brawlEvents).length &&
        <>
          <h1 className='title'>Events</h1>
          {Object.entries(brawlEvents).map(brawlEvent => {
            const [title, type] = brawlEvent
            return <EventCards key={title} event={type} title={title} />
          })}
        </>
      }
    </>
  )
}

export default Events