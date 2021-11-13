import React from 'react'
import CountUp from 'react-countup'
import avatarImg from './../../assets/img/trump_180x180.png'
import './CardResult.css'

function CardResult({ votePct, avatar, namePresident, votesNumber }) {
    return (
        <>
            <div className="card">
                <img src={avatar || avatarImg} alt="Avatar" className="card__avatar" />
                <div className="card__container">
                    <h2 className="card__name"><b>{namePresident || "John Doe"}</b></h2>
                    <h3>Win percentage</h3>
                    <h1 className="card__percentage">{<CountUp start={0} end={votePct} duration={3} /> || "50"}%</h1>
                    <h3>Votes</h3>
                    <p className="card__vote-number">{<CountUp start={0} end={votesNumber} duration={3} /> || "123123"}</p>
                </div>
            </div>
        </>
    )
}

export default CardResult
