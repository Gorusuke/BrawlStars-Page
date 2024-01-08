import { useEffect, useState } from 'react'
import { useParams } from 'wouter'
import { getMap } from '../../Utils'
import { MapInterface } from '../../interfaces/maps'
import Loading from '../Atoms/Loading'

const Map = () => {
  const [map, setMap] = useState({} as MapInterface)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { id } = useParams()
  
  useEffect(() => {
    setIsLoading(true)
    getMap(id!)
      .then(res => setMap(res))
      .finally(() => setIsLoading(false))
  }, [id])

  // console.log(map)

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && Boolean(Object.values(map).length) && <div>{map.stats[0].brawler}</div> }
    </>
  )
}

export default Map