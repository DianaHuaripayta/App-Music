<template>
  <div>
    <h1>Mi Vista</h1>
    <q-input standout v-model="searchQuery" :dense="dense" />
    <div style="display: flex; justify-content: space-around">
      <q-icon name="BUSCAR" @click="search" class="cursor-pointer" />
      <q-icon name="LIMPIAR" @click="searchQuery = ''" class="cursor-pointer" />
    </div>

    <ul>
      <li v-for="item in Tracks" :key="item.id">
        {{ item.name }}
      </li>
    </ul>

    computed -> {{  searchMessage }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import trackService from '../services/track'
export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      searchQuery: '',
      Tracks: [] as any[]
    }
  },
  computed:{//esto siempre se debe retornar
    searchMessage(){
      return `Encontrados ${this.Tracks.length}`
    }
  },
  methods: {
    search() {
      const Get = 'get';
      trackService.service(this.searchQuery, Get)
      .then((res: any) => {
        console.log(res, 'data');
      })

    }
  },
  setup() {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(false)
    }
  }
})
</script>
