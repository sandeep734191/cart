const clickItemToCart=function(obj){
    console.log('received in usersssssssssssssssssssssssssssssssssssssssssssssssssss'+ obj.id+ obj.movie)
    return ({
        type:"ADD_TO_CART",
        payload:obj
    })
}

/*const takeItemFromCart=function(obj){
    return ({
        type:"REMOVE_FROM_CART",
        payload:obj
    })
}*/

export default clickItemToCart;
