import React, { useState } from 'react'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import Crum from '../../components/Crum'
import Gridtable from '../../components/GridTable'

const Issue = () => {

    const [isClosed, setClosed] = useState(true);

    const closeSidebar = () => {
      setClosed(isClosed => !isClosed);
    };
  
  return (
    <div className='Mos'>
        <Topbar />
        <div className="Moswrapper">
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
                <div className="moswrapper">
                    <div className="moscomponent">
                        <h6 id='moscomponenttitle'>단위: 수량 판매구분: 처방실적</h6>
                            <Gridtable />
                        <div className="mosbuttons">
                            <button id='mosbutton1'>
                                다운로드
                            </button>
                            <button id='mosbutton2'>
                                재계산
                            </button>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Issue