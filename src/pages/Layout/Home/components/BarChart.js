import {useEffect, useRef} from "react";
import * as echarts from "echarts";

const BarChart=(props)=>{
    const chartRef = useRef(null);
    useEffect(() => {
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);
        const option = {
            title:{
                text: props.title
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
            ]
        };

        option && myChart.setOption(option);
    }, []);
    return(
        <div ref={chartRef} style={{width:'500px',height:'400px'}}></div>
    )
}

export default BarChart