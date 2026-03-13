import React from 'react'
import SubCompo from './SubCompo';
import { useState } from 'react';
import axios from 'axios'

function Services() {
    const [productList, setProductList] = useState([]);

    function Sum(){
        alert("sum");
    }

    function getProducts(){
        axios.get("https://fakestoreapi.com/products").then((apiResponse)=>{
            console.log(apiResponse.data);
            setProductList(apiResponse.data)
        }).catch((err)=>{
            console.log("Error is : ",err);
        });
    }

    return (
        <div>
            Our Services
            <ol>
                <li>Web Development</li>
                <li>Cyber Security</li>
                <li>App Development</li>
            </ol>
            <button onClick={getProducts}>Get Products</button>
            {
                productList.map((ele)=>{
                    return <div>
                        <p>Title : {ele.title}</p>
                        <p>Price : {ele.price}</p>
                        <p>Category : {ele.category}</p>
                        <p><b>Rating : {ele.rating.rate}</b></p>
                        <p>Reviewed by : {ele.rating.count}</p>
                        <div> Description :  {ele.description}</div>
                        <img src={ele.image} />
                    </div>
                })
            }
            <SubCompo callFunctionSum={Sum}/>
        </div>
    )
}

export default Services
