
import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { PlacesResponse } from '@/interfaces/places';


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
        
        const respuesta = await searchApi.get<PlacesResponse>(`/${ query }.json`,{
            params:{
                proximity: state.userLocation?.join(',')
            }
        });
        console.log( respuesta.data.features )
    }
}



export default actions;