import React from 'react'
import SubCompo from './SubCompo';
import axios from 'axios'

function Services() {

    function Sum(){
        alert("sum");
    }

    function getProducts(){
        axios.get("https://fakestoreapi.com/products").then((apiResponse)=>{
            console.log(apiResponse.data);
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
            <SubCompo callFunctionSum={Sum}/>
        </div>
    )
}

export default Services
