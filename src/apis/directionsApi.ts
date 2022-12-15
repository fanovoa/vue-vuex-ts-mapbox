import axios from 'axios';

const directionsApi = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives:false,
        geometries:'geojson',
        overview:'simplified',
        steps:false,      
        access_token:'pk.eyJ1IjoiZmFibm92b2EiLCJhIjoiY2twdWo3NTJ1MWJkNDJucWM1aWk0emJ2eSJ9._heIojF45X20rjDARnUziA'
    }
})

export default directionsApi;