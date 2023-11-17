<template>
     <q-circular-progress
      indeterminate
      size="75px"
      :thickness="0.6"
      color="lime"
      center-color="grey-8"
      class="q-ma-md"
    />
 </template>
 <script lang="ts">
 export default {
    name: 'LoadingIndicator',
 }
 </script>