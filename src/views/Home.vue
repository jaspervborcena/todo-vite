<script setup lang="ts">

// import { useCounterStore } from '../stores/counter'

// const counter = useCounterStore()

// counter.count++
// // with autocompletion ✨
// counter.$patch({ count: counter.count + 1 })
// // or using an action instead
// counter.increment()
</script>

<template>
  <!-- Access the state directly from the store -->
  <!-- <div>Current Count: {{ counter.count }}</div> -->
 
  <div class="welcome">
    <label>
        <b>Welcome ToDo App</b>
      </label>
  </div>
</template>


<style scoped>
.read-the-docs {
  color: #888;
}
.welcome {
margin-top: 20px;

}
</style>
