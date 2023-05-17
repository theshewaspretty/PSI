import React, { useState } from 'react'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import Crum from '../../components/Crum'
import GridTable from '../../components/GridTable'
import './Master.css'


const Master = () => {

    const [isClosed, setClosed] = useState(true);

    const closeSidebar = () => {
      setClosed(isClosed => !isClosed);
    };
  
  return (
    <div className='Master'>
        <Topbar />
        <div className="contentwrapper">
            <div className="mastercrum">
                <Crum />
            </div>
            <div className={isClosed ? 'show-menu' : 'hide-menu'}>
                <div className="sidebar">
                <button type='button' id='buttontoggle' 
                onClick={()=>closeSidebar()}>
                    &#9776;
                </button>
                    <Sidebar />
                </div>
                <div className="component">
                    <div className="componentsearchcondition">
                        조회조건 뜨게?
                    </div>
                    <GridTable />
                    <div className="componentbuttons">
                            <button id='componentbutton1'>신규등록</button>
                            <button id='componentbutton2'>신규등록</button>
                            <button id='componentbutton3'>신규등록</button>
                            <button id='componentbutton4'>저장</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Master