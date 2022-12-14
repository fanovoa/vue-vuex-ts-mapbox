import { defineComponent, onMounted, ref, watch } from 'vue'
import { usePlacesStore } from '@/composables'
import Mapboxgl from 'mapbox-gl';

export default defineComponent({
    name:'MapView',
    setup(){

        const mapElement = ref<HTMLDivElement>();
        const {  userLocation, isUserlocationReady } = usePlacesStore();
        
        const initMap =async () => {

            if(!mapElement.value) throw new Error('Div Element no exists')
            if(!userLocation.value) throw new Error('user location no existe')

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
                });

            const poup = mylocationPopup(map);
            myLocationMarker(map,poup);
           
        }

        const myLocationMarker =( map: Mapboxgl.Map, poup: Mapboxgl.Popup )=>{

            if(!userLocation.value) throw new Error('user location no existe')

            const mylocatation = new Mapboxgl.Marker()
            .setLngLat(userLocation.value)
            .setPopup(poup)
            .addTo(map)
        }

        const mylocationPopup = (map: Mapboxgl.Map) => {

            if(!userLocation.value) throw new Error('user location no existe')

            const mylocationP = new Mapboxgl.Popup()
            .setLngLat(userLocation.value)
            .setHTML(`
                <h4>Aquí estoy</h4>
                <p>Actualmente en Bogotá</p>
                <p>${userLocation.value}</p>
            `)
            .addTo(map)

            return mylocationP;
        }

        onMounted ( ( ) => {
            if( isUserlocationReady.value)
             return initMap();
        });

        watch(isUserlocationReady, (newVal) => {
            if(isUserlocationReady.value)
                initMap()
        });

        return{
            userLocation,
            isUserlocationReady,
            mapElement
        }
    }
})
