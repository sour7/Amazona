import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductPage = () => {
    const location:any= useLocation();
   const id:any=(location.pathname.split("/")[2])
  return (
    <div>ProductPage
        <h1>{id}</h1>
    </div>
  )
}

export default ProductPage