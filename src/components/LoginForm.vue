<script setup lang="ts">
import { ref } from 'vue';
import AuthService from '@/services/AuthService';

const emailRef = ref<HTMLInputElement | null>(null)
const passwordRef = ref<HTMLInputElement | null>(null)

function handleFormSubmit(event: Event) {
  event.preventDefault();

  if(!emailRef.value || !passwordRef.value) {
    return false;
  }

  AuthService.login(emailRef.value.value, passwordRef.value.value)
}
</script>

<template>
  <form method="post" @submit="handleFormSubmit">
    <div class="box">
      <h1>Login</h1>
      <input
        ref="emailRef" 
        type="email" 
        name="email" 
        autocomplete="off"
      />
      <input 
        ref="passwordRef" 
        type="password" 
        name="password"
        autocomplete="off"
      />
        
      <div class="footer">
        <button type="submit">
          Entrar
        </button> 
        
        <button>
          Inscrever-se
        </button>
      </div>
      <RouterLink to="/password-reset">Recuperar senha</RouterLink>
    </div> 
  </form>
</template>

<style scoped lang="scss">
p {
  font-size:12px;
  text-decoration: none;
  color:#ffffff;
}

h1 {
  font-size:1.5em;
  color:#525252;
}

.box {
  width: 300px;
  border-radius: 6px;
  margin: 0 auto 0 auto;
  padding: 16px;


  input {
    border-radius:4px;
    background:#ecf0f1;
    border: #ccc 1px solid;
    padding: 8px;
    width: 100%;
    font-size:1em;
    margin-bottom: 4px;
    border-radius:4px;
  }


  button {
    background:#2ecc71;
    width: 125px;
    padding-top: 5px;
    padding-bottom: 5px;
    color:white;
    border-radius: 4px;
    border: #27ae60 1px solid;   
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 0px;
    font-weight:800;
    font-size:0.8em;
  }



  button:first-child {
    margin-right: 4px;
  }

}


.footer {
  display: flex;
  justify-content: space-between;
}


a { 
  color: #e0e0e0;
  text-decoration: none;
}

a:hover {
  color: #fff;
}

</style>

