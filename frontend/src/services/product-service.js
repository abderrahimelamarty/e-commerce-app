import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8086/products";

const getAllProducts = () => {
  return axios.get(API_URL, { headers: authHeader() });
};
// const addRoom = (ville, adresse, prix, images, userId, description) => {
//   return axios.post(
//     API_URL + "addRoom",
//     { userId, ville, adresse, prix, images, description },
//     { headers: authHeader() }
//   );
// };
// const getRoom = (id) => {
//   return axios.get(API_URL + "Rooms/" + id);
// };
// const getRoomsBycity = (city) => {
//   return axios.get(API_URL + "RoomsByCity/" + city);
// };

const ProductService = {
  getAllProducts,
};

export default ProductService;
