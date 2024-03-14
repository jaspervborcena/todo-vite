<template>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/todoList">List of Todos</router-link> |
    <router-link to="/todoEntry">Enter Todos</router-link>
  </nav>
  <main>
    <router-view />
  </main>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<script>


import {ref, onMounted} from 'vue'
import TodoList from './views/TodoList.vue'
import axios from 'axios'
export default {
  name: 'App',
  components:{
    
  },
  // setup()
  // {
  //   const data=ref([]);
  //   const fetchData= async()=>{
  //     try{
  //       const response= await axios.get("https://jsonplaceholder.typicode.com/todos");
  //       data.value=response.data;
  //       console.log(response.data);
  //     }
  //     catch(error){
  //       console.log("Error fetching data");
  //     }


  //   }
  //   onMounted(()=>{
  //     fetchData();
  //   })

  //   return {
  //     data
  //   };
  // }

}
</script>

