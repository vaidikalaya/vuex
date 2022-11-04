import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex';

const store=createStore({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        incrementWithPayload(state,payload){
            state.count=state.count+payload
        },
        incrementWithOptions(state,payload){
            state.count=state.count+payload
        }
    },
    actions: {
        increment (context) {
            context.commit('increment')
        },
        incrementWithPayload(context,payload){
            context.commit('incrementWithPayload',payload)
        },
        incrementWithOptions(context,payload){
            context.commit('incrementWithOptions',payload.amount)
        }
    }
});

const app=createApp(App);
app.use(store)
app.mount('#app');
