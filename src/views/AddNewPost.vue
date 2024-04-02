<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '../utils/supabase'

const post = ref({
  title: ''
})

async function addPost() {
  const { error } = await supabase
    .from('post')
    .insert(post.value)
}


</script>

<template>
  <div class="login-page">
    <form @submit.prevent="addPost">
      <div>Login</div>
      <input type="text" v-model="post.title" />
      <button type="submit">add</button>
    </form>
  </div>
</template>
