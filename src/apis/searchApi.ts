import axios from 'axios';

const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit:5,
        language:'es',
        access_token:'pk.eyJ1IjoiZmFibm92b2EiLCJhIjoiY2twdWo3NTJ1MWJkNDJucWM1aWk0emJ2eSJ9._heIojF45X20rjDARnUziA'
    }
})

export default searchApi;