import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex';

const store=createStore({
    state(){
        return{
            count:0
        };
    },
    mutations:{
        increment(state){
            state.count++;
        },
        incrementWithPayload(state,payload){
            state.count=state.count+payload;
        },
        payloadWithAObject(state,payload){
            state.count=state.count+payload.amount;
        },
        payloadWithAObject2(state,payload){
            state.count=state.count+payload.amount;
        }
    }
});

const app=createApp(App);
app.use(store)
app.mount('#app');
