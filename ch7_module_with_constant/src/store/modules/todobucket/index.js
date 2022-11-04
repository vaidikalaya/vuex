import {FRUITS_GETTER,SELECTED_TODO_GETTER} from '../../constants';
export default{
    namespaced: true,
    state:()=>({
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
    }),
    getters:{
        [FRUITS_GETTER](state) {
            return state.todos.filter(todo => todo.type==='fruit')
        },
        fruitsTodoCount(state,getters){
            return getters.fruitsTodo.length;
        },
        [SELECTED_TODO_GETTER]:(state)=>(id)=> {
            return state.todos.find(todo => todo.id===id)
        },
    }
}