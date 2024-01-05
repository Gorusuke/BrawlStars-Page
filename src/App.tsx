import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [brawlers, setBrawlers] = useState([])

  useEffect(() => {
    fetch('https://api.brawlapi.com/v1/brawlers')
      .then(res => res.json())
      .then(res => {
        setBrawlers(res.list)
      })
  }, [])

  console.log(brawlers)
  
  return (
    <>
      {brawlers.map(brawler => {
        return (
          <div
            key={brawler.id}
            style={{
              marginBottom: '1rem',
              width: '400px',
            }}
          >
            <div style={{
              backgroundColor: 'white',
              color: 'black',
              gap: '16px',
              display: 'flex',
              borderRadius: '12px'
            }}>
              <img style={{width: '170px', height: '170px', borderRadius: '12px 0 0 12px'}} src={brawler.imageUrl2} alt={brawler.name} />
              <div style={{
                textAlign: 'center',
                width: '100%',
                height: 'max-content',
              }}>
                <h3>{brawler.name}</h3>
                <div>{brawler.class.name}</div>
                <div>{brawler.rarity.name}</div>
                <div style={{marginTop: '10px', display: 'flex', gap: '8px', justifyContent: 'center'}}>
                  {brawler.starPowers.map(power => <img
                    key={power.id}
                    style={{width: '35px', height: '37px'}}
                    src={power.imageUrl}
                    alt={power.name}
                  />)}
                  {brawler.gadgets.map(gadget => <img
                    key={gadget.id}
                    style={{width: '35px', height: '37px'}}
                    src={gadget.imageUrl}
                    alt={gadget.name}
                  />)}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default App
