import { Card, Col, Row } from "antd"
import React, { useEffect } from "react"
import LineCharts from "./components/LineCharts/LineCharts"
import "./dashboard.less"
import { useSelector } from "react-redux"
import { IRootState } from "@/redux"

const Dashboard: React.FC = () => {

    const storeState = useSelector((state: IRootState) => state.authReducer)

    useEffect(() => {
        console.log(storeState)
    })

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
