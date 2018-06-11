<template>
    <div id="coinDataContainer" v-if="$store.state.crypto.currencyName != ''">
       <div>
            <img :src="$store.state.crypto.logo" width="50" height="50"/>
            <h1>{{$store.state.crypto.currencyName}}</h1>
       </div>
        <currency-data-table
            :data="tableCurrencyData" />
    </div>
</template>

<style src="../css/CryptoCurrency.css"/>

<script>
    import {mapGetters} from 'vuex';
    import CurrencyDataTable from './CurrencyDataTable.vue';

   export default {
        components: {
           CurrencyDataTable
        },
        computed:{
            ...mapGetters([
                'tableCurrencyData'
            ])
        }
    }
</script>