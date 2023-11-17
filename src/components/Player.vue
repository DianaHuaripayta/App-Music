<template>
    AUDIO
    =====
    <audio src="miaudio.mp3" controls> este es un elemento de audio no soportado por tu navegador, prueba con otro </audio>
</template>
<script lang="ts">
export default {
  name: 'PlayerAudio',
  data() {
      return{
        track:{}
      }
  },
}
</script>