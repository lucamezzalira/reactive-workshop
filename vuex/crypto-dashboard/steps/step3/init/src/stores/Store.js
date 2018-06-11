import Vuex from 'vuex';
import Vue from 'vue';

import CoinsStore from './CoinsStore';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules:{
        coins: CoinsStore
    }
})