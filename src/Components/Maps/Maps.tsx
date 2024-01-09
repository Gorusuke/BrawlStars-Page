import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import Loading from '../Atoms/Loading'
import { groupByMapsTitle, getAllMaps } from '../../Utils'
import { MapsNamesInterface } from '../../interfaces/maps'
import './styles.css'

const Maps = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [maps, setMaps] = useState<MapsNamesInterface>({} as MapsNamesInterface)
  const mapsNames = Object.keys(maps)

  useEffect(() => {
    setIsLoading(true)
    getAllMaps()
      .then(res => setMaps(groupByMapsTitle(res)))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading &&
        <>
          <h1 className='title'>Maps</h1>
          {mapsNames.map(mapName => (
            <section key={mapName} className='maps-title'>
              <h2>{mapName}</h2>
              <div className='maps-container'>
                {maps[mapName as keyof MapsNamesInterface].map(map => (
                  <Link href={`/maps/${map.id}`} key={map.id}>
                    <img src={map.imageUrl} alt={map.name} />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </>
      }
    </>
  )
}

export default Maps