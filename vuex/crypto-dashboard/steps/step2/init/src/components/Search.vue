<template>
    <div id="formContainer">
        <form>
            <label>Search by symbol</label>
            <input ref="symbolInput" placeholder="e.g. BTC or ETH" type="text" />
        </form>
        <button @click="changeSymbol">GET CHART</button>
    </div>
</template>

<style src="../css/Search.css"></style>

<script>
    import Types from '../configs/MutationTypes';

    export default {
        methods: {
            changeSymbol(){
                const symbol = this.$refs.symbolInput.value;
                console.log(symbol)
            }
        }
    }
</script>