<script setup lang="ts">

</script>

<template>
  <form method="post">
    <div class="box">
      <h1>Login</h1>
      <input 
        type="email" 
        name="email" 
      />
      <input 
        type="password" 
        name="email" 
      />
        
      <div class="footer">
        <button>
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

<style scoped>
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
}


.footer {
  display: flex;
  justify-content: space-between;
}


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

a { 
  color: #e0e0e0;
  text-decoration: none;
}

a:hover {
  color: #fff;
}

</style>

