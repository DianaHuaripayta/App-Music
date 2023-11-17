<template>
   <button @click="emitClick">Click Me</button>
</template>
<script lang="ts">
export default {
  methods: {
      emitClick() {
        this.$emit('button-click');
      },
    },
}
</script>

  