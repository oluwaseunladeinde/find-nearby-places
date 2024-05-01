import axios from "axios";

const BASE_URL = 'https://maps.googleapis.com/maps/api/place'
const GOOGLE_PLACE_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

export const getNearByPlaces = async ({
    category,
    longitude,
    latitude,
}:
    {
        category: string;
        longitude: string;
        latitude: string;
    }) => {

    try {
        const url = `${GOOGLE_PLACE_URL}?fields=formatted_address,name,rating,opening_hours,geometry,photos&type=${category}&location=${latitude}%2C${longitude}&radius=5000&key=${GOOGLE_API_KEY}`;
        console.log(url);
        const response = await axios.get(url);
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }

}