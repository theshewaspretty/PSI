import React from 'react'
import Topbar from '../../components/Topbar'
import './Master.css'
import Sidebar from '../../components/Sidebar'
import Crum from '../../components/Crum'

const Master = () => {
  return (
    <div className='Master'>
        <Topbar />
        <div className="contentwrapper">
            <div className="mastercrum">
                <Crum />
            </div>
            <div className="contents">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="component">
                    component
                </div>
            </div>
        </div>
    </div>
  )
}

export default Master