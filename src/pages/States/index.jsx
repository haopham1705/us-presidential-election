import React, { useEffect, useState } from 'react'
import BoxState from '../../components/BoxState'
import electionApi from './.././../api/electionApi'
import { Skeleton } from 'antd';
import './State.css'

function States() {
    const [dataElection, setDataElection] = useState([])
    const [loading, setLoading] = useState(false)

    console.log("🚀 ~ file: index.jsx ~ line 8 ~ States ~ dataElection", dataElection)

    useEffect(() => {
        const fetchDataElection = async () => {
            setLoading(true)
            const electionRes = await electionApi.getAll()
            // remove last item "All State United"
            setDataElection(electionRes.slice(0, -1))
            setLoading(false)
        }
        fetchDataElection()
    }, [])

    return (
        <div className="state-content">
            <h1 className="state-content__title">States</h1>

            <div className="state-content__layout">
                {
                    !loading ?
                        (
                            dataElection.map((state) => {
                                return (
                                    <BoxState
                                        key={state["id"]}
                                        stateCode={state["stateCode"]}
                                        electoralVotes={state["electoralVotes"]}
                                        rating={
                                            state["rating"] === "Rep Win" ? "state-box__bg-rep" : "state-box__bg-dem"
                                        }
                                    />

                                )
                            })
                        ) :
                        (
                            <Skeleton active />
                        )
                }
            </div>
        </div>
    )
}
export default States
