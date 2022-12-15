import { Feature } from '@/interfaces/places';
import Mapboxgl from 'mapbox-gl';
import { MutationTree } from 'vuex';
import { MapState } from './state';


const mutation: MutationTree<MapState> = {
    setMap( state, map: Mapboxgl.Map) {
        state.map= map;
    },
    setPlaceMarkers(state, places: Feature[]){
        
        if(!state.map) return;
        //Borrar marcadores
        state.markers.forEach(marker => marker.remove());
        state.markers=[];

        //Crear los nuevos marcadores
        for (const place of places) {
            
            const [lng, lat ] = place.center;

            const popup= new Mapboxgl.Popup()
                  .setLngLat([ lng, lat ])
                  .setHTML(`
                    <h4>${place.text}</h4>
                    <p>${place.place_name}</p>`
                );

            const marker = new Mapboxgl.Marker()
            .setLngLat([ lng, lat ])
            .setPopup(popup)
            .addTo(state.map)

            state.markers.push(marker);

        }
    }
}



export default mutation;