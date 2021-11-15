import React from 'react'
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, PercentageOutlined, FileDoneOutlined } from '@ant-design/icons';

function ListStates() {
    return (
        <div className="site-statistic-demo-card">
            <Row gutter={16}>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<FileDoneOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Idle"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<FileDoneOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ListStates
