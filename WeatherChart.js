import moment, { now } from 'moment'
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

const WeatherChart = ({yDomain, values, hours, color}) => {
    const data = values.map((value, index) => {
        return {x: index, y: value}
    })

    const dateFormater = (dateString) => {
        const date = new Date(dateString);
        if (date.getHours() === 0) {
            return moment(date).format('DD/MM');
        } else {
            return moment(date).format('hh:mm');
        }
    }

    const getHours = () => {
        const nowDate = new Date();
        let hours = nowDate.getHours();
        let date = nowDate.getDate();
        let minutes = nowDate.getMinutes();
        
    }

    return (
        <Chart
            style={{ height: '30vh', width: '100vw' }}
            data={data}
            padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
            xDomain={{ min: 0, max: 48 }}
            yDomain={yDomain}
        >
            <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
            <HorizontalAxis tickCount={17} theme={{ labels: { formatter: (i) => dateFormater(hours[i]) } }}/>
            <Area theme={{ gradient: { from: { color: color.from }, to: { color: color.to, opacity: 0.4 } }}} />
            <Line theme={{ stroke: { color: color.line, width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
        </Chart>
    )
}

export default WeatherChart;