<template>
    <div>
      PAGE = MiVista
      <h1>Mi Vista </h1>
      <p>Bienvenido a mi vista.</p>
      <router-link to="/">back</router-link>
      <q-input outlined v-model="text" label="Outlined" />
    </div>
    <div>
      **
  <q-btn label="Do something" />
  <q-icon name="alarm" />
</div>
  </template>
  
  <script lang="ts">
  import { defineComponent,ref } from 'vue';
  
  export default defineComponent({
    name: 'MiVista',
    setup() {
    const text = ref('');

    return {
      text,
    };
  },
  });
  </script>