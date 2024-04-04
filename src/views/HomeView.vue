<script setup lang="ts">
import { ref,onMounted} from 'vue'
import { supabase } from '../utils/supabase'

const posts = ref([])
const search=ref('')

async function getPosts() {
  const { data } = await supabase.from('post').select()
  posts.value = data
  // console.log('todo',posts.value)
}
async function searcPost() {
  const { data } = await supabase.from('post').select('*').ilike('title', search.value)
  posts.value = data
  // console.log('todo',posts.value)
}
async function removePost(id:number|string) {
  const { error } = await supabase
  .from('post')
  .delete()
  .eq('id', id)
  .select()
}

onMounted(() => {
  getPosts()
})
</script>

<template>
  <main>

    <input type="text" v-model="search">
    <button @click="searcPost">search</button>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title + post.id }} 
      <router-link :to="{name:'EditPost',params:{id:post.id}}">Edit</router-link>
      <button @click="removePost(post.id)">remove</button>
      </li>
    </ul>
  </main>
</template>
