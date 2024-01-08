import { Link } from 'wouter'
import './atom-styles.css'

const BrawlStarsLogo = () => {
  return (
    <Link href='/'>
      <a className='logo'>
        <div className='svg-container'>
          <svg viewBox="0 0 114 114" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="m57 0a4 4 0 0 0 -2.81 1.15l-18.76 18.5-25.4 7a4 4 0 0 0 -2.81 4.86l6.65 25.49-6.64 25.49a4 4 0 0 0 2.77 4.87l25.4 7 18.76 18.49a4 4 0 0 0 5.62 0l18.79-18.5 25.4-7a4 4 0 0 0 2.81-4.86l-6.65-25.49 6.64-25.49a4 4 0 0 0 -2.77-4.87l-25.4-7-18.79-18.49a4 4 0 0 0 -2.81-1.15z" />
              <path
                d="m57 4 19.5 19.23 26.4 7.27-6.9 26.5 6.9 26.5-26.4 7.28-19.5 19.22-19.5-19.22-26.4-7.28 6.9-26.5-6.9-26.5 26.4-7.27z"
                fill="#ffbc20"
              />
            </g>
            <circle cx="57" cy="57" r="33" />
            <path
              d="m57 88a33 33 0 0 1 -33-32v1a33 33 0 0 0 66 0c0-.34 0-.67 0-1a33 33 0 0 1 -33 32z"
              fill="#ffe058"
            />
            <path
              d="m85 53c0-13.81-12.54-25-28-25s-28 11.19-28 25c0 9.25 5.63 17.32 14 21.65v3.35a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-3.35c8.37-4.33 14-12.4 14-21.65z"
              fill="#ffbc20"
            />
            <path d="m57 63 4 7h-8z" />
            <circle cx="45" cy="60" r="8"/>
            <circle cx="69" cy="60" r="8" />
            <path d="m54 54a2 2 0 0 1 -1.41-.59l-3-3a2 2 0 0 1 2.83-2.83l3 3a2 2 0 0 1 -1.42 3.42z" />
            <path d="m60 54a2 2 0 0 1 -1.41-3.41l3-3a2 2 0 0 1 2.83 2.83l-3 3a2 2 0 0 1 -1.42.58z" />
            <ellipse
              cx="45.25"
              cy="40.58"
              fill="#fff"
              rx="10"
              ry="6.5"
              transform="matrix(.8660254 -.5 .5 .8660254 -14.23 28.06)"
            />
          </svg>
        </div>
        <h1>Brawl Stars</h1>
      </a>
    </Link>
  )
}

export default BrawlStarsLogo