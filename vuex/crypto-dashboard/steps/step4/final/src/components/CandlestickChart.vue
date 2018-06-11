<template>
  <div class="echarts">
        <IEcharts ref="chart" :option="chartsData"></IEcharts>
    </div>
</template>

<style src="../css/Candlestick.css" />


<script>
    import IEcharts from 'vue-echarts-v3/src/lite.js';
    import 'echarts/lib/chart/candlestick';
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/component/title';
    import 'echarts/lib/component/tooltip';

    export default {
        props: {
            labels: {
                type: Array,
                required: true
            },
            currencyHistory: {
                type: Array,
                required: true
            }
        },
        components: {
            IEcharts
        },
        computed: {
            chartsData(){
                return {
                    animation: true,
                    animationDuration: 1500,
                    tooltip:{
                        transitionDuration: .5,
                        show: true
                    },
                    xAxis: {
                        data: this.$props.labels
                    },
                    yAxis: {
                        scale: true
                    },
                    series: {
                        type: 'candlestick',
                        data: this.$props.currencyHistory,
                        itemStyle: {
                            normal: {
                                color0: '#ef232a',
                                color: '#14b143',
                                borderColor0: '#ef232a',
                                borderColor: '#14b143'
                            },
                            emphasis: {
                                color: 'white',
                                borderColor: 'black'
                            }
                        }
                    }
                }  
            }
        },
        methods:{
            resizeChart(){
                if(this.$refs.chart)
                    this.$refs.chart.resize();
            }
        },
        mounted() {
            window.addEventListener('resize', this.resizeChart)
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.resizeChart)
        },
    }
</script>
