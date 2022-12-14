import { StateInterface } from "@/store";
import Mapboxgl from "mapbox-gl";
import { computed } from "vue";
import { useStore } from "vuex"


export const useMapStore  = () => {

    const store = useStore<StateInterface>();

    return{
        map:computed( () => {
            return store.state.map.map
        } ),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),

        //Mutations
        setMap: (map:Mapboxgl.Map) => store.commit('map/setMap', map),

        //Actions
    }
}