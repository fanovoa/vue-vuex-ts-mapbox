
import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { Feature,PlacesResponse } from '@/interfaces/places';


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
    async searchPlacesByTerm({ commit, state }, query:string): Promise<Feature[]> {

        if(query.length==0){
            //Todo: setPlaces
            commit('setPlaces',[]);
            return [];
        }

        if(!state.userLocation){
            throw new Error('No hay ubicación del usuario');
        }

        commit('setIsLoadingPlaces');
        
        const respuesta = await searchApi.get<PlacesResponse>(`/${ query }.json`,{
            params:{
                proximity: state.userLocation?.join(',')
            }
        });

        commit('setPlaces',respuesta.data.features);
        return respuesta.data.features;
    }
}



export default actions;