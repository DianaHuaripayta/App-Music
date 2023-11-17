<template>
  <div style="background: greenyellow;">
    <h1>{{ title }}</h1>
    <h1>{{ track.name }}</h1>
    <button @click="selectTrack()">click </button>
  </div>
 
</template>
<script lang="ts">
export default {
  props: {
    title: String,
    track:{ type: Object, required: true}
  },
  methods: {
    selectTrack(){
      this.$emit('select', this.track.name)
      console.log(this.track.name, 'oki')
    }
  },
  computed: {}
}
</script>
