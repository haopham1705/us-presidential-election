import React from 'react'
import './BoxState.css'

function BoxState({ stateCode, electoralVotes, rating }) {
    // console.log("🚀 ~ file: index.jsx ~ line 5 ~ BoxState ~ rating", rating)
    
    return (
        <div className={"state-box "+ rating}>
            <p className="state-box__name">{stateCode ?? "XX"} </p>
            <p className="state-box__electoral">{electoralVotes ?? "00"} </p>
        </div>
    )
}

export default BoxState
