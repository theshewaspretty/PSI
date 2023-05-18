import React, { useState } from 'react'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import Crum from '../../components/Crum'
import GridTable from '../../components/GridTable'

const Issue = () => {

    const [isClosed, setClosed] = useState(true);

    const closeSidebar = () => {
      setClosed(isClosed => !isClosed);
    };
  
  return (
    <div className='Issue'>
        <Topbar />
        <div className="Issuewrapper">
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
                <div className="Issuewrapper">
                    <div className="Issuecomponent">
                        <div className="issue1">
                            <h6>품절해소 제품</h6>
                            <GridTable />
                        </div>
                        <div className="issue2">
                            <h6>품절 중 제품</h6>
                            <GridTable />
                        </div>
                        <div className="issue3">
                            <h6>품절 예상 제품</h6>
                            <GridTable />
                        </div>
                        <div className="issuebutton">
                            <button id="issuebutton" type='button'>
                                다운로드
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