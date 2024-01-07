import { Route, Switch } from 'wouter'
import Brawlers from './Components/Brawlers/Brawlers'
import Brawler from './Components/Brawler/Brawler'
import BrawlStarsLogo from '../public/BrawlStarsLogo'
import './App.css'

function App() {
  return (
    <>
      <BrawlStarsLogo />
      <Switch>
        <Route path='/' component={Brawlers} />
        <Route path='/brawler/:id' component={Brawler} />
      </Switch>
    </>
  )
}

export default App

