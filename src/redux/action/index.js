// For Add Items to Cart
export const addCart = (product) => {
    return{
        type:"ADDITEM",
        payload: product
    }
}

// For Delete Items from Cart
export const delCart = (product) => {
    return{
        type:"DELITEM",
        payload: product
    }
}