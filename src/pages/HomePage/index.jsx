import React, { useEffect, useState } from 'react'
import ElectionResult from '../ElectionResult'
import electionApi from '../../api/electionApi'

function HomePage() {
    const [dataElection, setDataElection] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchDataElection = async () => {
            setLoading(true)
            const electionRes = await electionApi.getAll()
            console.log("🚀 ~ file: index.jsx ~ line 11 ~ fetchDataElection ~ electionRes", electionRes)
            setDataElection(electionRes)
            setLoading(false)
        }
        fetchDataElection()

        // Refresh every 30s
        // setTimeout(() => {
        // }, 10000)
    }, [])

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
