import React from 'react'
import './CardResult.css'

function CardResult({ electoralNumber, avatar, namePresident, votesNumber }) {
    return (
        <>
            <div class="card">
                <img src={avatar} alt="Avatar" className="card__avatar" />
                <div class="card__container">
                    <h2 className="card__name"><b>{namePresident || 'John Doe'}</b></h2>
                    <p>Electoral College</p>
                    <h1 className="card__electoral-number">{electoralNumber || '123'}</h1>
                    <p>Votes</p>
                    <p className="card__votes-number">{votesNumber || '123123'}</p>
                </div>
            </div>
        </>
    )
}

export default CardResult
