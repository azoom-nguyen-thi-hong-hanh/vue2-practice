<template>
  <div class="helloworld">
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
  name: 'hellowolrd',
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
<style scoped>

  .helloworld{
    font-size: 1.6rem;
    margin-top: 60px;
  }
</style>