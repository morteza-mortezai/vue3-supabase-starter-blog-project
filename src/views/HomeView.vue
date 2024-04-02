<script setup lang="ts">
import { ref,onMounted} from 'vue'
import { supabase } from '../utils/supabase'

const todos = ref([])

async function getPosts() {
  const { data } = await supabase.from('post').select()
  todos.value = data
  console.log('todo',todos.value)
}

onMounted(() => {
  getPosts()
})
</script>

<template>
  <main>
    {{ todos }}
  </main>
</template>
