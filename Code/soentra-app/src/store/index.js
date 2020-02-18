import Vuex from 'vuex';
import Vue from 'vue';
import enviroments from './modules/enviroments';

//Load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        enviroments
    }
})