import React from 'react'

function Section({userName,phoneNo}) {
    return (
        <div>
            {/* Conditional Rendering */}
            {
                userName==="Anish"?<h1>Conditional Rendering</h1>:<i>Invalid Prop Password</i>
            }

            This is Section Component used to understand Props
            <p>Username Transferred from Home Component is {userName}</p>
            <p><b>Phone No is {phoneNo}</b></p>
        </div>
    )
}

export default Section
