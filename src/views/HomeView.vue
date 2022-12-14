<template>
  <MapView />
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';
import MapView from '@/components/mapview/MapView.vue'

export default defineComponent({
  name: 'HomeView',
  components: { MapView },
  setup(){

    usePlacesStore();
  }
});
</script>
