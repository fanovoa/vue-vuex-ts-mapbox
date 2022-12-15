
import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation( { commit } ) {
        //todo: colocar loading
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', {lng: coords.longitude, lat:coords.latitude}),
            (error) => {
                console.log( error );
                throw new Error('No geolocation :(')
            }
        );
    },

    //todo: colocar el valor de retorno
    async searchPlacesByTerm({ commit, state }, query:string) {
        console.log( 'Vuex:', query );
    }
}



export default actions;