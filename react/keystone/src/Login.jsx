import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import SignUp from './SignUp';

function Login() {
    const [name, setname] = useState("Anish");
    const [password, setpassword] = useState();
    const [isSignUp, setisSignUp] = useState(false);

    useEffect(() => {
        console.log("Will be printe when password is entered")
    }, [password])

    console.log("Value in variable name : ", name)
    console.log("Value in variable password : ", password)

    function handleNameChange(e) {
        setname(e.target.value)
    }

    function handlePasswordChange(p) {
        setpassword(p.target.value)
    }

    function handleSignUp(){
        setisSignUp(true)
    }

    return (
        <div>
            {
                isSignUp ? <SignUp /> : <div>
                    <h2>Login</h2>
                    <p>{name}</p>
                    <p>Password entered : {password}</p>
                    <input type='email' name='' id='' placeholder='Enter the email' onChange={handleNameChange} /><br />
                    <input type='password' name='' id='' placeholder='Enter the password' onChange={handlePasswordChange} />
                    <br />
                    <button onClick={handleSignUp}>Sign Up Now</button>
                </div>
            }

        </div>
    )
}

export default Login
