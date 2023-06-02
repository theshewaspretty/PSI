import React from 'react'
import './ComCom.css'
import Topbar from '../components/Topbar'
import Crum from '../components/Crum'
import BasicExample from './Dropdown'
import TypesExample from './Buttons/buttons'
import CheckInlineExample from './CheckRadio'
import LoadingButton from './Buttons/buttonupload'
import Radiobuttons from './Radio'
import FillExample from './TapTap'
import AlertDismissible from './Alert'
import FormTextExample from './Textfield'


const ComCom = () => {
  
  return (
    <div className='comcomwrapper'>
      <div className="comcombutton">
        <h3>Buttons</h3>
        <TypesExample /><br /><br />
        <LoadingButton />
        <h3>DropDown</h3>
        <BasicExample />
        <h3>Checkbox, Radio</h3>
        <CheckInlineExample />
        <h3>Radio</h3>
        <Radiobuttons />
      </div>
      <div className="comcomforms">
        <h3>Taptap</h3>
        <FillExample /><br />
        <h3>Text field</h3>
        <FormTextExample />
      </div>
      <div className="comcombar">
        <br /><h3>Topbar</h3>
        <Topbar /><br />
        <h3>Crum</h3>
        <Crum /><br />
      </div>
    </div>
  )
}

export default ComCom