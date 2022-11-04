import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex';

const store=createStore({
    state: {
        todos: [
          { id: 1, name: 'Apple',  type: 'fruit' },
          { id: 2, name: 'Mango',  type: 'fruit' },
          { id: 3, name: 'Orange', type: 'fruit' },
          { id: 4, name: 'Banana', type: 'fruit' },
          { id: 5, name: 'Tomato',  type: 'vegitables' },
          { id: 6, name: 'Onions',  type: 'vegitables' },
          { id: 7, name: 'Potato', type: 'vegitables' },
          { id: 8, name: 'Carrots', type: 'vegitables' }
        ]
    },
    getters:{
        fruitsTodo (state) {
            return state.todos.filter(todo => todo.type==='fruit')
        },
        fruitsTodoCount(state,getters){
            return getters.fruitsTodo.length;
        },
        selectedTodoDetails:(state)=>(id)=> {
            return state.todos.find(todo => todo.id===id)
        },
    }
});

const app=createApp(App);
app.use(store)
app.mount('#app');
