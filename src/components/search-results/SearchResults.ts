import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue'
export default defineComponent({
name:'SearchResults',
setup(){

    const { isLoadingPlaces, places, userLocation } =usePlacesStore();


 return{
    isLoadingPlaces,
    places,
    userLocation
 }
}
});