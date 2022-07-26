import React, { useEffect, useState } from 'react'
import { Statistic, Card, Row, Col, Skeleton, Space } from 'antd';
import { FireOutlined, FileDoneOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import electionApi from '../../api/electionApi'
import './ListStates.css'

function ListStates() {
    const [dataElection, setDataElection] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchDataElection = async () => {
            setLoading(true)
            const electionRes = await electionApi.getAll()
            console.log("🚀 ~ file: index.jsx ~ line 16 ~ fetchDataElection ~ electionRes", electionRes)
            setDataElection(electionRes)
            setLoading(false)
        }
        fetchDataElection()
    }, [])

    return (
        // <div >
        <Row gutter={5} className="state-card" style={{ background: '#0092ff', }}>
                {
                    !dataElection ? (
                        <>
                            <Skeleton avatar paragraph={{ rows: 3 }} />
                            <Skeleton avatar paragraph={{ rows: 3 }} />
                        </>
                    ) : (
                        dataElection.map((election) => {
                            return (
                                <Col span={6} style={{ padding: '5px' }}>
                                    <Space align="start">
                                        <Card headStyle={{fontSize: '24px'}} style={{width: 300}} title={election.stateName} extra={<Link to="/states-details">More</Link>}>
                                            <h5>Votes</h5>
                                            <div className="state-card__result">
                                                <Statistic valueStyle={{fontSize: '20px'}} title="D. Trump" value={election.candidates[1]["vote"]} />
                                                <FireOutlined />
                                                <Statistic valueStyle={{fontSize: '20px'}} title="J. Biden" value={election.candidates[0]["vote"]} />
                                            </div>
                                            <Statistic
                                                title="-----"
                                                value={election.electoralVotes}
                                                precision={0}
                                                valueStyle={{ color: '#3f8600' }}
                                                prefix={<FileDoneOutlined />}
                                                suffix="Electoral Votes"
                                            />
                                        </Card>
                                    </Space>
                                </Col>
                            )
                        })
                    )
                }
            </Row>
        // </div>
    )
}

export default ListStates
