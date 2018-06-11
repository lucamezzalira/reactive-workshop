<template>
        <table>
            <tr>
                <th>Date</th>
                <th>Open</th>
                <th>Close</th>
                <th>Highest</th>
                <th>Lowest</th>
                <th>Volume from</th>
                <th>Volume to</th>
            </tr>
            <tr v-for="day in $props.data" :key="day.time">
                <td>{{formatDate(day.time)}}</td>
                <td>$ {{formatValue(day.open)}}</td>
                <td>$ {{formatValue(day.close)}}</td>
                <td>$ {{formatValue(day.high)}}</td>
                <td>$ {{formatValue(day.low)}}</td>
                <td>{{formatValue(day.volumefrom)}}</td>
                <td>{{formatValue(day.volumeto)}}</td>
            </tr>
        </table>
</template>

<style src="../css/CurrencyDataTable.css"/>

<script>
    import moment from 'moment-es6';
    import numeral from 'numeral';

    export default {
        props: {
            data: {
                type: Array
            }
        },
        methods: {
            formatValue(value){
                return numeral(value).format('0,0.00');
            },
            formatDate(date){
                return moment.unix(date).format('DD MMM YY')
            }
        }
    }
</script>