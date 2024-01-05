import { Route } from 'wouter'
import Brawlers from './Components/Brawlers/Brawlers'
import Brawler from './Components/Brawler/Brawler'
import './App.css'

function App() {  
  return (
    <>
      <Route path='/' component={Brawlers} />
      <Route path='/brawler/:id' component={Brawler} />
    </>
  )
}

export default App

