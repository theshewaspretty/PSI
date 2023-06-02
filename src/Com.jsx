import React from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Crum from './components/Crum'
import DatePicker from './components/DatePicker'
import ProductCode from './components/ProductCode'
import GridTable from './components/GridTable'

const Com = () => {

    const StyleSheet={
        display:"grid",
        width: "100%",
        height:"100%",
        border:"1px solid black",
        background:"#ffffff",
    }

    const StyleSheetLeft={
        display:"flex",
        width:"100%",
        margin:"1rem",

    }

    const StyleSheetGrid={
        display:"grid",
        width:"100%",
        height:"30vh",
    }

  return (
        <div className="comag" style={StyleSheet}>
            <div className="1">
                <Topbar />
            </div>
            <div className="2" style={StyleSheetLeft}>
                <Crum />
                <DatePicker />
                <ProductCode />
            </div>
            <div className="3" style={StyleSheetGrid}>
                <GridTable />
            </div>
        </div>

  )
}

export default Com