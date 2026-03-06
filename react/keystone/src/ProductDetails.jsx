import React from 'react'
import { useLocation } from 'react-router-dom'

function ProductDetails() {

    const details=useLocation()
    console.log("details : ",details)

    return (
        <div>
            <h1>Product Details</h1>
            <h3>Title : {details.state.name}</h3>
            <p>price : {details.state.price}</p>
            <img src={details.state.image} alt='img' width={300} height={300}/>
        </div>
    )
}

export default ProductDetails
