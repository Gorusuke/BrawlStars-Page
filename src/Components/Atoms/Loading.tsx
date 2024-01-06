import '../../App.css'
import BSLogo from '/BrawlStarsLoading.svg'

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