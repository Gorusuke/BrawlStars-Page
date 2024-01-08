import { useState } from 'react'
import NavArrow from '/NavArrow.svg'
import Search from '/Search.svg'
import { ALL, CLASS, RARITY } from '../../Utils/constants';
import './atom-styles.css'

const Filters = ({ setText, filterBy, setFilterBy }:
  { setText: (arg: string) => void, filterBy: string, setFilterBy: (arg: string) => void }
) => {
  const [showfilters, setShowFilters] = useState<boolean>(false);
  const brawlersType = [ALL, RARITY, CLASS]
  return (
    <section className='filter-container'>
      <div className='search'>
        {filterBy === ALL &&
          <>
            <input
              onChange={(e) => setText(e.target.value)}
              placeholder='Type a brawler name'
              type="text"
              />
            <img src={Search} alt="Search" />
          </>
        }
      </div>
      <div className='sort'>
        <button
          className='sort-button'
          onClick={() => setShowFilters((prev) => !prev)}
        >
          Sort by <img src={NavArrow} alt="Arrow" />
        </button>
        {showfilters &&
          <ul>
            {brawlersType.map(type =>
              <li
                key={type}
                onClick={() => {
                  setShowFilters(false)
                  if (type === RARITY) setFilterBy(RARITY)
                  else if (type === CLASS) setFilterBy(CLASS)
                  else setFilterBy(ALL)
                }}>
                {type}
              </li>
            )}
          </ul>}
      </div>
    </section>
  )
}

export default Filters