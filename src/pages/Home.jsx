import React from 'react'
import './Home.css'
import Topbar from '../components/Topbar'

const Home = () => {
  return (
    <div className='Home'>
      <div className="Hometop">
        <Topbar />
      </div>
      <div className="Homebody">
        <div className="Homebody1">
          <div className="homelefttop">
            lefttop
          </div>
          <div className="homerighttop">
            righttop
          </div>
          <div className="homeleftbottom">
            leftbottom
          </div>
          <div className="homerightbottom">
            rightbottom
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home