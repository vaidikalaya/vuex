<template>
  <div>
    <h1>Access Direct State Value</h1>
    <h2>{{$store.state.count}}</h2>

    <h1>Access Using Computed</h1>
    <h2>{{count}}</h2>

    <h1>Access Using mapState</h1>
    <h2>{{count2}}</h2>

    <h1>Change State Value - Update Everywhere</h1>
    <button @click="$store.state.count++">Increment</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Ch1Intro',
  computed:{
    count(){
      return this.$store.state.count;
    },
    ...mapState({
       count2: state=>state.count
    })
  }
}
</script>