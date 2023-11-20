<template>
  aqui
  <q-layout view="lHh LpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          MUSIC
        </q-toolbar-title>

       
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
     011  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae minima itaque amet exercitationem, tempora dignissimos, culpa, ratione asperiores perferendis voluptatum. Delectus illo aliquid fuga impedit iste facilis animi. Incidunt!
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from 'vue';
export default defineComponent({
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
});
</script>
<!-- </template> -->

<!-- <script lang="ts">
import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false)
    }
  }
}
</script> -->

