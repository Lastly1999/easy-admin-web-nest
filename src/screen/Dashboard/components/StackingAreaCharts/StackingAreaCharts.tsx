import React, { useEffect, useState } from "react"
import { Area, AreaConfig } from '@ant-design/plots'

const StackingAreaCharts: React.FC = (prop) => {

    const [data, setData] = useState([])

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error)
            })
    };

    const config: AreaConfig = {
        data,
        xField: 'date',
        yField: 'value',
        seriesField: 'country',
    }

    return (
        <Area {...config} />
    )
}

export default StackingAreaCharts