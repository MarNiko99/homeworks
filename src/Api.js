import axios from "axios";
import queryString from 'query-string';
import Utils from "./helpers/Utils";

const api = axios.create({
  baseURL: process.env.DEV ? 'https://dev-api.unsplash.com' : 'https://api.unsplash.com',
})

api.interceptors.request.use(async (config) => {
  const clientID = await Utils.getClientId();
  if (clientID) {
    config.headers.Authorization = `Client-ID ${clientID}`
  }
  return config;
}, (error) => Promise.reject(error));

class Api {

  static searchPhotos(s) {
    const query = queryString.stringify({
      query: s,
      per_page: 20,
    })
    return api.get(`/search/photos?${query}`)
  }

}

export default Api;
