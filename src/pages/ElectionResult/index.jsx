import React, { useEffect, useState } from 'react'
import CardResult from '../../components/CardResult'
import trumpImg from '../../assets/img/trump_180x180.png'
import bidenImg from '../../assets/img/biden_180x180.png'
import { Skeleton } from 'antd'
import './ElectionResult.css'

function ElectionResult({ dataElection }) {
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        // dataElection.length > 0 ? setCandidates(dataElection[dataElection.length - 1]["candidates"]) : []
        if (dataElection.length > 0) {
            setCandidates(dataElection[dataElection.length - 1]["candidates"])
        } else {
            setCandidates([]);
        }
    }, [dataElection])
    // console.log("🚀 ~ file: index.jsx ~ line 25 ~ useEffect ~ setCandidates", candidates)

    return (
        <div className="card-result">
            {
                !dataElection ? (
                    <>
                        <Skeleton avatar paragraph={{ rows: 3 }} />
                        <Skeleton avatar paragraph={{ rows: 3 }} />
                    </>
                ) : (
                    candidates.map((candidate) => {
                        return (
                            <CardResult
                                key={candidate["id"]}
                                avatar={candidate["fullName"] === "Donald Trump" ? trumpImg : bidenImg}
                                namePresident={candidate["fullName"]}
                                votePct={candidate["votePct"]}
                                votesNumber={candidate["vote"]}
                            />)
                    })
                )
            }
        </div>
    )
}

export default ElectionResult
