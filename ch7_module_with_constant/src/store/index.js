
import { createStore } from 'vuex';
import counterModule from './modules/counter/index';
import todobucketModule from './modules/todobucket/index';

const store=createStore({
    modules:{
        counter:counterModule,
        todos:todobucketModule
    }
});

export default store;