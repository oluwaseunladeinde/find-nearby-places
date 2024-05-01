import axios from "axios";


export const getNearByPlace = async ({ category, latitude, logitude }: { category: string; latitude: string; logitude: string }) => {
    await axios.get('/api/places?category=' + category + "&lat=" + latitude + "&lng=" + logitude);
}

export const searchPlace = async ({ searchtext, latitude, logitude }: { searchtext: string; latitude: string; logitude: string }) => {
    await axios.get('/api/places?searchtext=' + searchtext + "&lat=" + latitude + "&lng=" + logitude);
}



