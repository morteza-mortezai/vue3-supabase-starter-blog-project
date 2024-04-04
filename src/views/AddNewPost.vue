<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '../utils/supabase'
const props=defineProps<{
  id?:string|number
}>()

const post = ref({
  title: ''
})

async function addPost() {
  const { error } = await supabase
    .from('post')
    .insert(post.value)
}
async function updatePost(id:number|string) {
  const { error } = await supabase
    .from('post')
    .update(post.value)
    .eq('id', id)
    .select()
}
async function getPost(id:number|string) {
  const { data } = await supabase
    .from('post')
    .select()
    .eq('id', id)
    post.value.title=data[0].title
}
function onSumbit(){
  if(props.id){
    updatePost(props.id)
  }else{
    addPost()
  }
}
async function upload(event:any){
  const avatarFile = event.target.files[0]
  const { data, error } = await supabase
  .storage
  .from('avatars')
  .upload('public/avatar1.png', avatarFile, {
    cacheControl: '3600',
    upsert: false
  })
}
if(props.id){
  getPost(props.id)
}

</script>

<template>
  <div class="login-page">
    <form @submit.prevent="onSumbit">
      <div>Add/Edit</div>
      <input type="text" v-model="post.title" />
      <button type="submit">add/update</button>
    </form>
    <input type="file" @change="upload">
  </div>
</template>
