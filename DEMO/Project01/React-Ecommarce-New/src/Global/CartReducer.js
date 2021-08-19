export const CartReducer = (state, action) =>{

    const {shoppingCart, totalPrice, qty } = state; //state se luu lai
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            // console.log('add to cart case');
            const check = shoppingCart.find(product => product.id === action.id);
            if (check) {//nếu click add to cart (1 product) 2 lần 
                console.log("/");
                return state;                
            } else {
                product = action.product; //get product hien tai
                product['qty'] = 1;
                updatedQty = qty + 1; // Cart quantity
                updatedPrice = totalPrice + product.price;
                return {shoppingCart: [product, ...shoppingCart], 
                    totalPrice: updatedPrice, qty: updatedQty};
            }
            break;
        case 'INC':
            product = action.cart;

            product.qty = product.qty + 1;
            updatedPrice = totalPrice + product.price;
            updatedQty = qty + 1; //totalQuantity
            console.log("Quantity: ",updatedQty);
            // console.log(shoppingCart)
            index = shoppingCart.findIndex(cart => cart.id === action.id);
            // console.log(index);
            // console.log('shoppingcart: ',shoppingCart[index])
            // console.log('currentCart: ',product)
            shoppingCart[index] = product;
            return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice,
            qty: updatedQty};
            break;
        case 'DEC': 
            product = action.cart;
            if (product.qty > 1) {
                product.qty = product.qty - 1;
                updatedPrice = totalPrice - product.price;
                updatedQty = qty - 1;
                index = shoppingCart.findIndex(cart => cart.id == action.id);
                shoppingCart[index] = product;
                return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice,
                qty: updatedQty};
            } else {
                return state;
            }            
            break;
        case 'DELETE':
            const filtered = shoppingCart.filter(product => product.id !== action.id) //return object
            product = action.cart;
            updatedQty = qty - 1;
            updatedPrice = totalPrice - product.price * product.qty;
            return {shoppingCart: [...filtered], totalPrice: updatedPrice, qty: updatedQty}
        default: return state;
    }

    
}