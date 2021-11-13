import React, { useEffect, useState } from 'react'
import ElectionResult from '../ElectionResult'
import electionApi from '../../api/electionApi'

function HomePage() {
    const [dataElection, setDataElection] = useState([])

    useEffect(() => {
        const fetchDataElection = async () => {
            const electionRes = await electionApi.getAll()
            console.log("🚀 ~ file: index.jsx ~ line 11 ~ fetchDataElection ~ electionRes", electionRes)
            setDataElection(electionRes)
        }
        // Refresh every 30s
        setTimeout(() => {
            fetchDataElection()
        }, 30000)
    }, [dataElection])

    return (
        <div>
            <h1>Presidential Results</h1>
            <div className="status-result">
                <span className="status-result__time">Updated: 9M Ago</span>
                <span>Exit Poll +</span>
            </div>
            <ElectionResult dataElection={dataElection} />

        </div>
    )
}

export default HomePage
