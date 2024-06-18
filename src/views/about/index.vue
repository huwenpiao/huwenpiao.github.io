<template>
  <div>
      <h1>About Page-</h1>
      <h3>counter: {{ counter }}</h3>
      <button @click="add">计数</button>
  </div>
</template>

<script setup lang="ts">
import useDemoStore from '@/store/modules/demo'
import { storeToRefs } from 'pinia'

const demoStore = useDemoStore()
const {counter} = storeToRefs(demoStore)
const add = () => {
  demoStore.increment()
}
</script>

<style scoped>
button {
  color: cornflowerblue;
  font-size: 30px;
}
</style>
