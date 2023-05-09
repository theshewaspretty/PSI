import React, { useState } from 'react'
import './Sidebar.css'
import DatePicker from './DatePicker';
import MonthPicker from './MonthPicker';


const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <button className="sidebartoggle" >
          &#9776;
        </button>
      <div className="sidebarcontent">
        <div className="sidebarmonth">
          대상월<br />
          <div className="sidebarinbox" >
            <DatePicker />
            <MonthPicker />
          </div>
        </div>
        <div className="materialcode">
          제품코드<br />
          <div className="sidebarinbox">
            ""
          </div>
        </div>
        <div className="materialname">
          제품명<br />
          <div className="sidebarinbox">
            ""
          </div>
        </div>
        <div className="contentsearch">
          <button className='search'>
          조회
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar