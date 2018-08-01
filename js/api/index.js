import axios from 'axios';

const BASE_URL = 'https://let-is-go-lunch.herokuapp.com/v1/restaurants';
const RANDOM_URL = `${BASE_URL}/random`;

export const randomRequest = () => axios.get(RANDOM_URL);
export const listRestaurantRequest = () => axios.get(BASE_URL);
export const createRestaurantRequest = restaurant =>
  axios.post(BASE_URL, restaurant);
export const updateRestaurantRequest = restaurant =>
  axios.put(BASE_URL, restaurant);
export const deleteRestaurantRequest = id =>
  axios.delete(BASE_URL, { data: { id } });

