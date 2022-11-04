<template>
  <div>

    <h1>Access Store Data</h1>
    <h2>{{count}}</h2>

    <h1>Change Store Data - Call Mutation Direct</h1>
    <button @click="$store.commit('increment')">Increment</button>

    <h1>Change Store Data - Call Mutation Using Methods</h1>
    <button @click="increment()">Increment</button>

    <h1>Change Store Data - Call Mutation With payload</h1>
    <button @click="incrementWithPayload(20)">Increment</button>

    <h1>Change Store Data - Payload With Object</h1>
    <button @click="payloadWithAObject()">Increment</button>

    <h1>Change Store Data - Payload With Object2</h1>
    <button @click="payloadWithAObject2()">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'FirstComponent',
  computed:{
    count(){
      return this.$store.state.count;
    },
  },
  methods:{
    increment(){
      return this.$store.commit('increment');
    },
    incrementWithPayload(number){
      return this.$store.commit('incrementWithPayload',number)
    },
    payloadWithAObject(){
      return this.$store.commit('payloadWithAObject',{amount:10});
    },
    payloadWithAObject2(){
      return this.$store.commit({
          type: 'payloadWithAObject2',
          amount: 11
      });
    }
  }
}
</script>