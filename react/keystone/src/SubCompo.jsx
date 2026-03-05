import React from 'react'

function SubCompo({callFunctionSum}) {
    return (
        <div>
            <p>This is SubCompo</p>
            <button onClick={callFunctionSum}>Call for sum</button>
        </div>
    )
}

export default SubCompo
