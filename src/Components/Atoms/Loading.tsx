import BSLogo from '/BrawlStarsLoading.svg'
import './atom-styles.css'

const Loading = () => {
  return (
    <div className='loading-container'>
      <img
        src={BSLogo}
        alt="Loading"
      />
    </div>
  )
}

export default Loading