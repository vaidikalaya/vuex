<template>
  <div>
    <h3>Todo List</h3>
    <ul style="margin-top:-10px">
      <li v-for="todo in todolist" :key="todo.id">{{todo.name}}</li>
    </ul>

    <h3>Fruit Todos (Total Fuits : {{fruitsTodoCount}})</h3>
    <ul>
      <li v-for="fruit in fruitsTodo" :key="fruit.id">{{fruit.name}}</li>
    </ul>

    <h3>Find Todo Details</h3>
    <ul style="margin-top:-10px">
      <li v-for="todo in todolist" :key="todo.id"><a href="#" @click="findSelectedTodo(todo.id)">{{todo.name}}</a></li>
    </ul>

    <h3>Selected Todo</h3>
    <ul v-if="selectTodo">
      <li>Id: {{selectTodo.id}}</li>
      <li>Name: {{selectTodo.name}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'FirstComponent',
  data(){
    return{
      selectTodo:null,
    }
  },
  computed:{
    todolist(){
      return this.$store.state.todos;
    },
    fruitsTodo(){
      return this.$store.getters.fruitsTodo;
    },
    fruitsTodoCount(){
      return this.$store.getters.fruitsTodoCount;
    }
  },
  methods:{
    findSelectedTodo(id){
      this.selectTodo=this.$store.getters.selectedTodoDetails(id);
    }
  }
}
</script>