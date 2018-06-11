import moment from 'moment-es6';

export const prepareChartData = data => {
    const chartLabels = data.map(value => moment.unix(value.time).format("DD MMM YY"));
    const chartData = data.map(value => [value.open, value.close, value.low, value.high])
  
    return {
        labels: chartLabels,
        data: chartData
    }
}