import { useState } from 'react'
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
          Sort by 
          <svg 
            width="24px" 
            height="24px" 
            strokeWidth="1.5" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            color="currentColor"
          >
            <path 
              d="M6 9L12 15L18 9" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            ></path>
          </svg>
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