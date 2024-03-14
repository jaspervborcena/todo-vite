<template>
  <form @submit.prevent="addToDo">
    <h2 class="label-wrapper">
      <label for="new-todo-input" class="label__lg">
        <b>What are you going to do today?</b>
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      name="new-todo"
      autocomplete="off"
      :id="item.id"
      v-model="title"
      class="input__lg" />
    <button type="submit" class="btn btn__primary btn__lg bg-zinc p-3 rounded">Save</button>
  </form>
</template>


<script setup lang="ts">
import { onMounted,computed,ref} from 'vue'
import { usetodoListStore } from '../stores/todoListStore';
        const title=ref('');
        const todoListData= usetodoListStore();
        // const getToDoList = computed(() => {
        //   return todoListData.getToDoList;
        // });
        const getToDo = computed(() => {
          return todoListData.todoList;
        });

        const addToDo = computed(() => {
          console.log(title);
          todoListData.addTodoList(title);
        });


      

        function setTitle(newTitle:string){
          title.value=newTitle;
        }
        onMounted(() => {
         todoListData.fetchTodoList();
        });
</script>

<style>
* {
  box-sizing: border-box;
}
#wrapper {
  width: 170px;
}
textarea {
  border-color: #eee;
  border-width: 1px;
}
label, textarea, input {
  width: 100%;
  display: block;
  margin: 25px;
  margin-right: 100px;
}
input {
  border-style: solid;
  border-width: 1px;
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

</style>