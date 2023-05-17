import React, { useState } from 'react'
import ReactModal from 'react-modal';
import './Modal.css';
import ProductSource from './ProductSource';
import CloseIcon from '@mui/icons-material/Close';

const Modal = () => {

    const [isOpen, setOpen] = useState(false);

    function openModal() {
        setOpen(true);
    };

    function isClosed() {
        setOpen(false);
    };

    const customStyles = {
        content: {
        top: '50%',
        left: '40%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        
        },
      };


  return (
    <div className="modalwrapper">
        <div className="modalonbutton">
            <button onClick={openModal} className='productcodebutton'>
                &#8230; 
            </button>
        </div>
        <div className="modalmain">
        <ReactModal isOpen={isOpen} style={customStyles} 
        >
            <div className="modalbuttonpos">
                <button onClick={isClosed} id='buttonstyle'>
                    <CloseIcon />
                </button>
            </div>
            <div className="modalcontent">
                <div className="modalproductcode">
                    <ProductSource />
                </div>
            </div>

        </ReactModal>
        </div>

    </div>

  )
}

export default Modal