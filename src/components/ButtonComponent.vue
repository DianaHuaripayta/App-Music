<!-- <template>
   <button @click="emitClick">Click Me</button>
   <hr>
   <q-page class="row items-center justify-evenly">
    <q-btn @click="toggleDarkMode">Toggle dark mode</q-btn>
  </q-page>
</template>
<script lang="ts">
import { useQuasar } from 'quasar';
export default {
  methods: {
    setup() {
    const $q:any = useQuasar();
    return {
      toggleDarkMode() {
        $q.dark.toggle();
      },
    };
  },
      emitClick() {
        this.$emit('button-click');
      },
    },
}
</script>

  
<style>
body.body--dark {
  background: #333333;
}
</style> -->


<template>
  <q-page class="row items-center justify-evenly">
    <q-btn @click="toggleDarkMode">Toggle dark mode</q-btn>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const $q = useQuasar();
    return {
      toggleDarkMode() {
        $q.dark.toggle();
      },
    };
  },
});
</script>

<style>
body.body--dark {
  background: #333333;
}
</style>

