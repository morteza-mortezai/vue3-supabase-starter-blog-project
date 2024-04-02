<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '../utils/supabase'

const form = ref({
    email:'',
    password:''
})
async function login() {
    const { data, error } = await supabase.auth.signInWithPassword(form.value)
    if(data.user) alert(data.user.email)
}


</script>

<template>
    <div class="login-page">
        <form @submit.prevent="login">
            <div>Login</div>
            <input type="text" v-model="form.email" />
            <input type="text" v-model="form.password" />
            <button type="submit">login</button>
        </form>
    </div>
</template>
<style scoped>
.login-page{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
form{
    border: 1px dashed black;
    border-radius: 10px;
    padding: 15px;
}
form>*{

    display: block;
    margin-top: 10px;
}
</style>
