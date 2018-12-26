const takeItemFromCart=function(obj){
    console.log("remmmmmmmmmmmmmmmmmmovvvvvvvvvvving ittttttttttteeeeeeeeeeem")
    return ({
        type:"REMOVE_FROM_CART",
        payload:obj
    })
}

export default takeItemFromCart;