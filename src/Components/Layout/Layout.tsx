import { ReactNode } from "react"
import { Link } from "wouter"
import BrawlStarsLogo from "../Atoms/BrawlStarsLogo"

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className="layout-container">
      <header>
        <nav className='nav'>
          <BrawlStarsLogo />
          <ul>
            <Link href='/brawlers'><a>Brawlers</a></Link>
            <Link href='/maps'><a>Maps</a></Link>
            <Link href='/events'><a>Events</a></Link>
            <Link href='/game-modes'><a>Game Modes</a></Link>
          </ul>
        </nav>
      </header>
      {children}
      <footer>
        <nav>
          <BrawlStarsLogo />
          <ul>
            <Link href='/brawlers'><a>Brawlers</a></Link>
            <Link href='/maps'><a>Maps</a></Link>
            <Link href='/events'><a>Events</a></Link>
            <Link href='/game-modes'><a>Game Modes</a></Link>
          </ul>
        </nav>
        <div>
          <p className="">
            Design inspired by these pages
            <a href="https://brawlify.com/" target="_blank">Brawlify</a>
            and
            <a href="https://brawlstats.com/" target="_blank">Brawlstats</a>
          </p>
          <p>
            Credit about Brawl Stars API to<a href="https://brawlify.com/" target="_blank">Brawlify</a>
          </p>
          <p>See documentation<a href="https://brawlapi.com/" target="_blank">here</a></p>
          <p className="policy">
            This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for this content.
            For more information, see the<a href="https://supercell.com/en/fan-content-policy/" target="_blank">Fan Content Policy at Supercell Fan Content Policy.</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout