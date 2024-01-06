import { Route, Switch } from 'wouter'
import Brawlers from './Components/Brawlers/Brawlers'
import Brawler from './Components/Brawler/Brawler'
import './App.css'

function App() {  
  return (
    <Switch>
      <Route path='/' component={Brawlers} />
      <Route path='/brawler/:id' component={Brawler} />
    </Switch>
  )
}

export default App

