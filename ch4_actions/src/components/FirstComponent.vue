<template>
  <div>
    <h1>Count Value</h1>
    <h2>{{count}}</h2>

    <button @click="increment">Increment</button><br><br>

    <button @click="incrementWithPayload">IncrementWithPayload</button><br><br>

    <button @click="incrementWithOptions">incrementWithOptions</button>
  </div>
</template>

<script>
export default {
  name: 'Ch1Intro',
  computed:{
    count(){
      return this.$store.state.count;
    }
  },
  methods:{
    increment(){
      this.$store.dispatch('increment');
    },
    incrementWithPayload(){
      this.$store.dispatch('incrementWithPayload',10);
    },
    incrementWithOptions(){
      this.$store.dispatch('incrementWithOptions',{amount:20});
    }
  }
}
</script>