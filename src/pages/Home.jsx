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
        <div className="body">
          <div className="lefttop">
          lefttop
          </div>
          <div className="righttop">
          righttop
          </div>
          <div className="leftbottom">
          leftbottom
          </div>
          <div className="rightbottom">
          rightbottom
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home