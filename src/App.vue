<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
      <div>
      <router-link :to="{name:'home'}">Home</router-link>
      <router-link :to="{name:'AddNewPost'}">new post</router-link>
      <router-link :to="{name:'LoginPage'}">login</router-link>
    </div>
  <RouterView />
</template>
<style>
.router-link-exact-active{
  background-color: red;
}
</style>

