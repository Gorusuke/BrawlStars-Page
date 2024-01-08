import { Route, Switch, Link } from 'wouter'
import Brawlers from './Components/Brawlers/Brawlers'
import Brawler from './Components/Brawler/Brawler'
import Maps from './Components/Maps/Maps'
import Events from './Components/Events/Events'
import GameModes from './Components/GameModes/GameModes'
import BrawlStarsLogo from './Components/Atoms/BrawlStarsLogo'
import './App.css'

function App() {
  return (
    <>
      <nav className='nav'>
        <BrawlStarsLogo />
        <ul>
          <Link href='/brawlers'><a>Brawlers</a></Link>
          <Link href='/maps'><a>Maps</a></Link>
          <Link href='/events'><a>Events</a></Link>
          <Link href='/game-modes'><a>Game Modes</a></Link>
        </ul>
      </nav>
      <Switch>
        <Route path='/' component={Brawlers} />
        <Route path='/brawlers' component={Brawlers} />
        <Route path='/brawler/:id' component={Brawler} />
        <Route path='/maps' component={Maps} />
        <Route path='/events' component={Events} />
        <Route path='/game-modes' component={GameModes} />
      </Switch>
    </>
  )
}

export default App

