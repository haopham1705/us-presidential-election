import React, { useEffect, useState } from 'react'
import CardResult from '../../components/CardResult' 
import trumpImg from '../../assets/img/trump_180x180.png'
import bidenImg from '../../assets/img/biden_180x180.png'
import './ElectionResult.css'

function ElectionResult({dataElection}) {
    const [electoralNumber, setElectoralNumber] = useState([])
    // const [votesNumber, setVotesNumber] = useState(123)

    useEffect(() => {
        dataElection.length > 0 ? setElectoralNumber(dataElection[dataElection.length - 1]["electoralVotes"]) : setElectoralNumber('123')
        
        // dataElection.length > 0 ? setVotesNumber(dataElection[dataElection.length - 1]["candidates"]) : setVotesNumber('123123')
        // console.log("🚀 ~ file: index.jsx ~ line 16 ~ useEffect ~ setVotesNumber", votesNumber) 
        console.log("🚀 ~ file: index.jsx ~ line 16 ~ useEffect ~ setElectoralNumber", electoralNumber)
        
    }, [dataElection])
    // const { name, number } = dataElection
    

    return (
        <>
        <div className="card-result">
                <CardResult electoralNumber={electoralNumber} avatar={trumpImg} namePresident="Donald Trump" />
                <CardResult electoralNumber={electoralNumber} avatar={bidenImg} namePresident="Joe Biden"/>
        </div>
        </>
    )
}
// dataElection
export default ElectionResult
