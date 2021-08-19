//Bài 8: Combine reducers

const {createStore, combineReducers} = require('redux');
const initState = {
  // products: { //slice
  //   items: []
  // },
  // cart: {
  //   items: [],
  //   total: 0
  // }
};

const initProductState = {
  items: []
};
const productReducer = (state = initProductState, action) =>{
  return state;
};
const initCartState = {
  items: [],
  total: 0
};
const cartReducer = (state = initCartState, action) => {
  return state;
};

// const reducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//     //..
//     case 'REMOVE_FROM_CART':
//     //..
//     case 'FETCH_PRODUCTS_SUCCESS':
//     //..
//     case 'FETCH_PRODUCT_FAIL':
//     //..
//     default:
//       return state;
//   }
// }

const reducer = combineReducers({
  product: productReducer,
  cart: cartReducer
});
const store = createStore(reducer);
console.log(store.getState());