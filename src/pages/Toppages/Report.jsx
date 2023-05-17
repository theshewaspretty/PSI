import React, { useState } from 'react'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import Crum from '../../components/Crum'
import BarChartt from '../../components/Chart/BarChart'
import DoChart from '../../components/Chart/DoChart'

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
                <div className="reportwrapper">
                    <div className="reportcomponent">
                        <div className="chart1">
                            <h4>총 재고</h4><br />
                            <BarChartt />
                        </div>
                        <div className="chart2">
                            <h4>당사 재고</h4><br />
                            <BarChartt />
                        </div>
                        <div className="chart3">
                            <h4>유통 재고</h4><br />
                            <BarChartt />
                        </div>
                            <div className="sales1">
                                    <h4>총재고 비중</h4><br />
                                    <DoChart />
                            </div>
                                <div className="sales2">
                                    <h4>당사 재고 비중</h4><br />
                                    <DoChart />
                            </div>
                                <div className="sales3">
                                    <h4>유통재고 비중</h4><br />
                                    <DoChart />
                            </div>
                        </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Master