<template>
  <div>
    <input type="text" placeholder="Your name" v-model="name">
    <h1>Hi, my name is {{ name }}</h1>
    <div>
      Number: {{ number }}
    </div>
    <button @click="number++">Increment</button>
    <p>{{test()}}</p>
  </div>
</template>

<script>
export default {
  name: 'SayMyName',
  data() {
    return {
      name: "Hanh",
      number: 0,
      description:"day la noi dung",
    }
  },
  methods:{
    test: function(){
      return this.description
    }
  } 
}
</script>