import React from 'react'
import './Sidebar.css'
import DatePicker from './DatePicker';
import ProductCode from './ProductCode';

const Sidebar = () => {

  return (
    <div className="Sidebar">
      {/* 열렸을때 영역 */}
      <div className="SidebarON">
        <div className="sidebarcontent">
          <div className="sidebarmonth">
            대상월<br />
            <div className="sidebarinbox" >
              <DatePicker />
            </div>
          </div>
          <div className="materialcode">
          제품코드<br />
            <div className="sidebarinbox">
              <ProductCode />
            </div>
          </div>
          <div className="materialname">
            제품명<br />
            <div className="sidebarinbox">
              <ProductCode />
            </div>
          </div>
        </div>
      <div className="contentsearch">
          <button className='search' id='searchtoggle'>
            조회
          </button>
      </div>
      </div>
      {/* 닫혔을때 영역 */}
    </div>
  )
}

export default Sidebar