<template>
    <div>
        <div>
            <search/>
            <coins-list/>
        </div>
        <crypto-currency/>
    </div>
</template>
<style>
    body{
        width: 100%;
        font-family: "Roboto", helvetica, arial, sans-serif;
        text-rendering: optimizeLegibility;
    }
</style>

<script>
    import Search from './Search.vue';
    import CoinsList from './CoinsList.vue';
    import CryptoCurrency from './CryptoCurrency.vue';
    export default {
        components:{
            Search,
            CoinsList,
            CryptoCurrency
        }
    }
</script>
