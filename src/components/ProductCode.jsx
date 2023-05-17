import React, { useState } from 'react'
import Modal from './Modal'
import './ProductCode.css'

const ProductCode = () => {
    const [isOpen, setOpen] = useState(false);
    
  return (
    <div className='Productcode'>
        <Modal isOpen={isOpen} />
    </div>
  )
}

export default ProductCode