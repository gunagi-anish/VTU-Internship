
import React from 'react'
import { useEffect } from 'react'
import Section from './Section';
import Welcome from './Welcome';
import reactlogo from './images/logo512.png'

function Home() {

    useEffect(()=>{
        console.log("Inside useEffect");
        console.log("running inside useeffect")
    },[])


    function getAvg(){
        alert("Avg")
    }
    
    const sampleProducts=[{name:"Bangles",price:100,image:{reactlogo}},{name:"Watch",price:400,image:{reactlogo}}]
        

    return (
        <div>
            <h2>Welcome To React JS WEb Development Classes</h2>
            <img src={reactlogo} width={200} height={200} alt='react' />
            <Section userName={"Anish"} phoneNo={1234567890}/>
            <Welcome generateAvg={getAvg}/>
            {/* /*rendering list in js */}
            {
                sampleProducts.map((product)=>{
                    return <div className='ProductCart'>
                        <p>Product name is : {product.name}</p>
                        <p>Product Price : {product.price}</p>
                        <img src={product.image} width={100} height={100} alt='productimg'/>
                    </div>
                })
            }
        </div>
    )
}

export default Home
