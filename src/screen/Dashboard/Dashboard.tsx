import { Card, Col, Row } from "antd"
import React from "react"
import LineCharts from "./components/LineCharts/LineCharts"
import "./dashboard.less"

const Dashboard: React.FC = () => {
    return (
        <Row gutter={16}>
            <Col span={24}>
                <Card title="随便什么数据">
                    <LineCharts />
                </Card>
            </Col>
        </Row>
    )
}

export default Dashboard
