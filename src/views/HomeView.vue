<template>
  <div>
    <h1>Mi Vista</h1>
    <q-input standout v-model="searchQuery" :dense="dense" />
    <div style="display: flex; justify-content: space-around">
      <q-icon name="BUSCAR" @click="search" class="cursor-pointer" />
      <q-icon name="LIMPIAR" @click="searchQuery = ''" class="cursor-pointer" />
    </div>

    
    <NotificationsSlot v-show="showNotification">
      <slot name="body">
        <h1>Algo Salio mal AQUI</h1>
      </slot>
    </NotificationsSlot>
    <br>
    computed -> {{ searchMessage }}
    <LoadingIndicator v-show="isLoading"/>
    <ul v-show="!isLoading">
      <li v-for="item in Tracks" :key="item.id">
        <TitleComponent :title="appTitle" :track="item" @select="setSelectedTrack" />
        {{ item.name }}
      </li>
    </ul>
    Audio!!!
    <PlayerAudio></PlayerAudio>
    <ButtonComponent @button-click="handleButtonClick" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { apiCredentials } from '@/services/config'
import { ref } from 'vue'
import TitleComponent from '@/components/TitleComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import  LoadingIndicator  from "@/components/shared/Loader.vue";
import  NotificationsSlot  from "@/components/shared/Notifications.vue";
import  PlayerAudio  from "@/components/Player.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    TitleComponent,
    ButtonComponent,
    LoadingIndicator,
    NotificationsSlot,
    PlayerAudio
  },
  data() {
    return {
      searchQuery: '',
      Tracks: [] as any,
      searchResults: [],
      appTitle: 'Mi Aplicación Vue 3',
      isLoading : false,
      selectedTrack: '',
      showNotification: false
    }
  },
  computed: {
    //esto siempre se debe retornar

    searchMessage() {
      return `Encontrados ${this.Tracks.length}`
    },
  },
  watch:{
    showNotification(){
      if (this.showNotification) {
          setTimeout(() => {
            this.showNotification = false;
          }, 3000);
      }
    }
  },
  methods: {
    async search() {
      if (!this.searchQuery) {
        return
      }
      this.isLoading = true;
      const items = await apiCredentials.search(this.searchQuery, ['artist'])
      this.Tracks = items.artists.items;
      this.isLoading = false;
      this.showNotification = this.Tracks.length === 0;
      console.log(this.Tracks, 'this.Tracks 000')
      console.table(
        items.artists.items.map((item) => ({
          name: item.name,
          followers: item.followers.total,
          popularity: item.popularity
        }))
      )
    },
    handleButtonClick() {
      alert('Botón clickeado');
    },
    setSelectedTrack(name:any){
      this.selectedTrack = name;
      console.log( this.selectedTrack, 'selected')
    }
  },
  setup() {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(false),
    }
  }
})
</script>
