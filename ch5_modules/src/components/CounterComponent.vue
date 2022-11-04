<template>
  <div>

    <h2>Using mapAction</h2>
    <h3>Count: {{count}}</h3>
    <button @click="increment">Increment</button>

    <h2>Using Normal Action</h2>
    <h3>Count: {{count}}</h3>
    <button @click="increment2">Increment</button>

    <div>
      <h3>Todo List</h3>
      <ul style="margin-top:-10px">
        <li v-for="todo in todolist" :key="todo.id">{{todo.name}}</li>
      </ul>

      <h3>Fruit Todos</h3>
      <ul>
        <li v-for="fruit in fruitsTodo" :key="fruit.id">{{fruit.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions, mapGetters} from 'vuex'
export default {
  name: 'CounterComponent',
  computed:{
    ...mapState({
       count: state=>state.counter.count,
       todolist:state=>state.todos.todos,
    }),
    ...mapGetters('todos',[
       'fruitsTodo'
    ])
  },
  methods:{
    ...mapActions('counter',[
        'increment'
    ]),
    
    increment2(){
      this.$store.dispatch('counter/increment');
    }
  }
}
</script>