import { computed, onMounted } from "vue";
import { StateInterface } from "@/store";
import { useStore } from "vuex"



export const usePlacesStore =() => {

    const store = useStore<StateInterface>();

    onMounted(() => {
        if(!store.getters['places/isUserlocationReady']){
            store.dispatch('places/getInitialLocation')
        }
    })

    return {
        //State
        isLoading: computed( () => store.state.places.isLoading),
        userLocation: computed( () => store.state.places.userLocation ),

        //Getters
        isUserlocationReady: computed<boolean>( () => store.getters['places/isUserlocationReady'])

        //Actions

        //Mutations

    }
}