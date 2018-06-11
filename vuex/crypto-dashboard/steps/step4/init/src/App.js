import Vue from 'vue';

import store from './stores/Store';
import App from './components/App.vue';

const app = new Vue({
    el: "#app",
    store,
    render: h => h(App)
})