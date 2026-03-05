import React from 'react'
import { useState } from 'react'

function CreateEnquiry() {
    const [enquiry,setEnquiry]=useState({userName:"anish",password:"",age:0,Fname:""})

    function handleChange(e){
        const {name,value}=e.target;
        setEnquiry((oldval)=>({...oldval,[name]:value}))
    }
    console.log("Enquiry object : ",enquiry)

    return (
        <div>
            Create Enquiry
            <form>
                <input type="text" name='userName' id='' placeholder='Enter username' onChange={handleChange}/><br />
                <input type="password" name='password' id='' placeholder='Enter password' onChange={handleChange}/><br />
                <input type="number" name="age" id="" placeholder='Enter your age' onChange={handleChange}/><br />
                <input type="text" name="Fname" id="" placeholder='Enter Father Name' onChange={handleChange}/><br />
                <button type='submit'>Submit btn</button>
            </form>
        </div>
    )
}

export default CreateEnquiry
