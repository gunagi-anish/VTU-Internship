import React from 'react'
import SubCompo from './SubCompo';

function Services() {

    function Sum(){
        alert("sum");
    }
    return (
        <div>
            Our Services
            <ol>
                <li>Web Development</li>
                <li>Cyber Security</li>
                <li>App Development</li>
            </ol>
            <SubCompo callFunctionSum={Sum}/>
        </div>
    )
}

export default Services
