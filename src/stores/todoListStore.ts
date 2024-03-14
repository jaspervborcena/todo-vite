import { defineStore } from 'pinia'
import axios from 'axios'
export const usetodoListStore = defineStore('todoList', {
    state: () => {
        return { todoList: null }
    },
    getters: {
        getToDo(state){
            return state.todoList
          }
      },
    actions: {
        async fetchTodoList() {
            try{
             //const response= await axios.get("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=15");
             const response= await axios.get("https://jsonplaceholder.typicode.com/todos");
             this.todoList=response.data;
              console.log("result",this.todoList);
            }
            catch(error){
              console.log("Error fetching data",error);
            }
    },
    async addTodoList(toDo) {
      try{

        console.log("toDo",toDo)
          const dataObj = {
            userId: 1,
            title: toDo,
            completed: false
          }
         await  axios.post(
            'https://jsonplaceholder.typicode.com/todos',
            {
              title: dataObj.title,
              completed: dataObj.completed
            }
          )
          .then((response) => 
          {
          console.log("response",response)
          this.todoList.push(response)
          }
          )
          .catch((error) => console.log(error));   
          console.log("response2",this.todoList)
      }
      catch(error){
        console.log("Error fetching data",error);
      }
},
    },
  })

  