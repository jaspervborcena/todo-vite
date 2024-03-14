<template>

  <table id="table-container" class="center">
  <thead>
    <tr>
      <th className="">Id</th>
      <th className="">Title</th>
      <th className="">Completed</th>
      <th className="">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in getToDo" :key="item.id">
      <td :id="item.id" className="bg-zinc p-3 rounded">{{ item.id || 'Title not available' }}</td>
      <td className="bg-zinc p-3 rounded">{{ item.title || 'Title not available' }}</td>
      <!-- <td>{{ item.completed || 'Title not available' }}</td> -->
       <td> 

      <input
        type="checkbox"
        class="bg-zinc p-3 rounded"
        :id="item.id"
        :checked="item.completed"
         />

        </td>

     <td>  
     <button type="button"  ref="editButton" class="btn btn__primary btn__lg bg-zinc p-3 rounded" :id="item.id">Edit</button>
     <button type="button"  ref="deleteButton" class="btn btn__primary btn__lg bg-zinc p-3 rounded" :id="item.id">Delete</button>
      </td>
    
    </tr>
  </tbody>
</table>

</template>


<script setup scope lang="ts">
import { onMounted,computed} from 'vue'
import { usetodoListStore } from '../stores/todoListStore';

        const todoListData= usetodoListStore();
        // const getToDoList = computed(() => {
        //   return todoListData.getToDoList;
        // });
        const getToDo = computed(() => {
          return todoListData.todoList;
        });
        onMounted(() => {
         todoListData.fetchTodoList();
        });

</script>



<style scoped>
.center {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-transform: capitalize;
}


.custom-checkbox > .checkbox {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  height: 2.5rem;
  margin-top: 0;
  padding: 5px;
  border: 2px solid #0b0c0c;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.custom-checkbox > input:focus {
  outline: 3px dashed #fd0;
  outline-offset: 0;
  box-shadow: inset 0 0 0 2px;
}
.custom-checkbox {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 40px;
  margin-bottom: 10px;
  padding-left: 40px;
  clear: left;
}
.custom-checkbox > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
  margin: 0;
  opacity: 0;
}
@media only screen and (min-width: 40rem) {
 
  .custom-checkbox {
    font-size: 19px;
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}

table { 
  border-collapse: collapse; 
}

th { 
  border-top: 1px solid black; 
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

td { 
  border-top: 1px solid black; 
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}
</style>