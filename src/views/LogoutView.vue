<script setup lang="ts">

import router from '@/router';
import {useAuthStore} from '@/stores';


const authStore = useAuthStore();

authStore
  .logout()
  .then(() => {
    console.log('Logout true')
    router.push({name: 'login'})
  })
  .catch(err => {
    console.log('Error on logout:  ', err)
  })

</script>

<template>
  <p>Aguarde...</p>
</template>

