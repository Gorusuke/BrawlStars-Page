import { useState } from 'react'
import { Route, Switch } from 'wouter'
import Brawlers from './Components/Brawlers/Brawlers'
import Brawler from './Components/Brawler/Brawler'
import NavArrow from '/NavArrow.svg'
import Search from '/Search.svg'
import './App.css'

function App() {
  const [showfilters, setShowFilters] = useState<boolean>(false);
  return (
    <>
      <h1>sdfhsjkdfhsjkfskjfhdf</h1>
      <section className='filter-container'>
        <div className='search'>
          <input type="text" placeholder='Type a brawler name' />
          <img src={Search} alt="Search" />
        </div>
        <div className='sort'>
          <button
            className='sort-button'
            onClick={() => setShowFilters((prev) => !prev)}
          >
            Sort <img src={NavArrow} alt="Arrow" />
          </button>
          {showfilters && 
            <ul>
              <li>Rarity</li>
              <li>Class</li>
            </ul>
          }
        </div>
      </section>
      <div className='root'>
        <Switch>
          <Route path='/' component={Brawlers} />
          <Route path='/brawler/:id' component={Brawler} />
        </Switch>
      </div>
    </>
  )
}

export default App

