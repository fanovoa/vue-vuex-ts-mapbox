<template>
 <button v-if="isBtnReady"
    @click="onMyLocationClicked"
    class="btn btn-primary">
    Ir a mi ubicación 
 </button>
</template>

<script lang='ts'>
import { useMapStore, usePlacesStore } from '@/composables';
import { computed, defineComponent } from 'vue'

export default defineComponent({
name:'MyLocationBtn',
setup(){

    const { userLocation , isUserlocationReady} = usePlacesStore();
    const { map, isMapReady } = useMapStore();

    return{

        isBtnReady: computed<boolean>( () => isUserlocationReady.value && isMapReady.value  ),

        onMyLocationClicked: () => {
            map.value?.flyTo({
                center: userLocation.value,
                zoom:14
            })
        }
    }
}
});
</script>

<style scoped>

    button{
        position: fixed;
        top:30px;
        right: 30px;
    }
</style>