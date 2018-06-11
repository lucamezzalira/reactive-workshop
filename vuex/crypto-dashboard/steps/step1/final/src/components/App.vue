<template>
    <div>
        <div>
            <search/>
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
    export default {
        components:{
            Search
        }
    }
</script>
