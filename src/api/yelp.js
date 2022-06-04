import axios from "axios";
import { keys } from "../../env/keys.js";

const yelpAuth = `Bearer ${keys.yelpApiKey}`;

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:  yelpAuth
    }
})