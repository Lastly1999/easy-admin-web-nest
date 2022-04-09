import React, { useEffect, useState } from 'react'
import { Line, LineConfig } from "@ant-design/plots"

const LineCharts: React.FC = () => {

    const [data, setData] = useState<any>([])

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            })
    }

    useEffect(() => {
        asyncFetch()
    },[])

    const config: LineConfig = {
        data:data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
    }

    return (
        <Line {...config} />
    )
}

export default LineCharts