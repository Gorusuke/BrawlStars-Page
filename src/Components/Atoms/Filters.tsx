import { useState } from 'react'
import NavArrow from '/NavArrow.svg'
import Search from '/Search.svg'

const Filters = ({setText}: {setText: (arg: string) => void}) => {
  const [showfilters, setShowFilters] = useState<boolean>(false);
  return (
    <section className='filter-container'>
      <div className='search'>
        <input
          onChange={(e) => setText(e.target.value)}
          placeholder='Type a brawler name'
          type="text"
        />
        <img src={Search} alt="Search" />
      </div>
      <div className='sort'>
        <button
          className='sort-button'
          onClick={() => setShowFilters((prev) => !prev)}
        >
          Group by <img src={NavArrow} alt="Arrow" />
        </button>
        {showfilters && 
          <ul>
            <li>Rarity</li>
            <li>Class</li>
          </ul>
        }
      </div>
    </section>
  )
}

export default Filters