const { default: axios } = require('axios');

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = 'http://localhost:1337/api/';

const axiosClient = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
});

const getLatestProducts = () => axiosClient.get('/products?populate=*');

const getProductById = (id) => axiosClient.get('/products/'+id+'?populate=*');

// llamar a productos por categoria
const getProductByCategory=(category)=>axiosClient.get('/products?filters[category][$eq]='+category+"&populate=*");

// Add to Cart Collection
const addToCart=(data)=>axiosClient.post('/carts',data)

// Get user cart items
const getUserCartItems=(email)=>axiosClient.get('/carts?populate[products][populate][0]=banner&filters[email][$eq]='+email)

// Delete cart item
const deleteCartItem = (id) => axiosClient.delete(`/carts/${id}`);

// Create order
const createOrder = (data) => {
    return axiosClient.post('/orders', data); 
  };
  
  

export default {
    getLatestProducts,
    getProductById,
    getProductByCategory,
    addToCart,
    getUserCartItems,
    deleteCartItem,
    createOrder
};
