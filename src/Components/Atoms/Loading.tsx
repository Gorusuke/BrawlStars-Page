import '../../App.css'
import BSLogo from '/BrawlStars.svg'

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