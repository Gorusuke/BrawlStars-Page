import { useEffect, useState } from 'react'
import { BrawlerInterface } from './interfaces/brawler'
import './App.css'
import Brawler from './Components/Brawler/Brawler'

function App() {
  const [brawlers, setBrawlers] = useState<BrawlerInterface[]>([])

  useEffect(() => {
    fetch('https://api.brawlapi.com/v1/brawlers')
      .then(res => res.json())
      .then(res => {
        const { list } = res
        const listSorted = [...list]
          .sort((a: BrawlerInterface, b: BrawlerInterface) => a.id - b.id)
        setBrawlers(listSorted)
      })
  }, [])
  
  return (
    <>
      {brawlers.map(brawler => <Brawler key={brawler.id} brawler={brawler} /> )}
    </>
  )
}

export default App

