import React, { useState } from "react"
// style
import "./dashboard.less"
// components
import { Card, Col, Row, Tabs } from "antd"
import LineCharts from "./components/LineCharts/LineCharts"
import StackingAreaCharts from "./components/StackingAreaCharts/StackingAreaCharts"
import GroupingCharts from "./components/GroupingCharts/GroupingCharts"
import GroupLineCharts from "./components/GroupLineCharts/GroupLineCharts"

const { TabPane } = Tabs

export type IDashboardpProps = {}

export type IChartsCompOption = {
    title: string
    key: string
    compInstall: JSX.Element
}

const chartsComps: IChartsCompOption[] = [
    {
        title: "数据展示1",
        key: "1",
        compInstall: <LineCharts />
    },
    {
        title: "数据展示2",
        key: "2",
        compInstall: <StackingAreaCharts />
    }
]

const Dashboard: React.FC<IDashboardpProps> = () => {

    const [activekey, _setActivekey] = useState<string>("1")

    return (
        <Row gutter={[8, 8]}>
            <Col span={24}>
                <Card>
                    <Tabs defaultActiveKey={activekey} size='middle' style={{ marginBottom: 32 }}>
                        {
                            chartsComps.map(item => (
                                <TabPane tab={item.title} key={item.key}>
                                    {item.compInstall}
                                </TabPane>
                            ))
                        }
                    </Tabs>
                </Card>
            </Col>
            <Col span={12}>
                <Card title="不知道啥数据展示">
                    <GroupingCharts />
                </Card>
            </Col>
            <Col span={12}>
                <Card title="分组折线图">
                    <GroupLineCharts />
                </Card>
            </Col>
        </Row>
    )
}

export default Dashboard
