<template>
  <div id="app">
    <TodoList :newTodo = "newTodo" :editting="editting"/>
      <ul class="nav">
      <li class="nav-item">
         <router-link class="nav-item-link" tag="a" to="/" exact-path>Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-item-link" tag="a" to="/about" exact-path>About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-item-link" tag="a" to="/contact" exact-path>Contact</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-item-link" tag="a" to="/helloworld" exact-path>HelloWorld</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-item-link" tag="a" to="/todolist" exact-path>TodoList</router-link>
      </li>
       <li class="nav-item">
         <router-link class="nav-item-link" tag="a" to="/user" exact-path>User</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>


<style>
*{
  margin: 0;
  padding: 0;
}
 html {
    color: #333;
    font-size: 62.5%;
    font-family: "Open Sans", sans-serif;
    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.nav{
    height: 50px;
    line-height: 50px;
    background-color: #000;
    display: flex;
    font-size: 1.4rem;
    justify-content: space-around;
  }
  .nav-item-link{
    text-decoration: none;
  }

</style>
