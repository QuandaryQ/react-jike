import * as echarts from 'echarts'
import {useEffect, useRef} from "react";
import BarChart from "./components/BarChart";
const Home = () => {
    return (
        <div>
            <BarChart title='标题1'/>
            <BarChart title='标题2'/>
        </div>
    )
}

export default Home