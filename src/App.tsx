import { Route, Switch } from 'wouter'
import Brawlers from './Components/Brawlers/Brawlers'
import Brawler from './Components/Brawler/Brawler'
import Maps from './Components/Maps/Maps'
import Map from './Components/Map/Map'
import Events from './Components/Events/Events'
import GameModes from './Components/GameModes/GameModes'
import Layout from './Components/Layout/Layout'
import './App.css'

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' component={Brawlers} />
          <Route path='/brawlers' component={Brawlers} />
          <Route path='/brawler/:id' component={Brawler} />
          <Route path='/maps' component={Maps} />
          <Route path='/maps/:id' component={Map} />
          <Route path='/events' component={Events} />
          <Route path='/game-modes' component={GameModes} />
        </Switch>
      </Layout>
    </>
  )
}

export default App

