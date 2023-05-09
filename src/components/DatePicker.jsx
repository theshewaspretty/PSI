// import { ko } from 'date-fns/locale';
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.css'

const DatePicker = () => {
    const [StartDate, setStartDate] = useState(new Date()); 

  return (
    <div className="datepicker">
        <ReactDatePicker className='DatePicker'
        // locale={ko}
        dateFormat={"yy.MM"}
        selected={StartDate}
        onChange={date => setStartDate(date)} />
    </div>
  )
}

export default DatePicker