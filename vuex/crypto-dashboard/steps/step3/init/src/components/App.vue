<template>
    <div>
        <div>
            <search/>
            <coins-list/>
        </div>
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
    export default {
        components:{
            Search,
            CoinsList
        }
    }
</script>
