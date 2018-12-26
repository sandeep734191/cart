var arr = [];
//arr.push({ 'id': 0, 'movie': 'hero', 'count': 1 });
export default function (state = null, action) {
    console.log("cart function called")

    switch (action.type) {


        case "ADD_TO_CART":
            console.log("action is received in add" + action.payload.id + action.payload.movie + arr.length);
           
            var index=arr.map(function(item){
                return item.id
            }).indexOf(action.payload.id)
            if(index<0){
                action.payload['count'] = 1
                arr.push(action.payload);
            }
            else{
                arr[index]['count'] +=1;

            }
            break;
        case "REMOVE_FROM_CART":
            console.log("action is reveived in subbbbbbbbbbbbbbbbbbbbbbb");
            var desiredIndex = action.payload.id;
            var index = arr.map(function (item) {
                return item.id;
            }).indexOf(desiredIndex);
            arr.splice(index, 1);


            break;
        case "ADD_ITEM":
            action.payload['count'] += 1;
            break;
        case "SUB_ITEM":
            if(action.payload['count']>0){
                action.payload['count'] -=1;
            }
           
            break;


        default:
            break;
    }


    return arr;
    /*console.log("inside reducer maths.js");
switch(action.type){
    
    
    case "ADD_TO_CART" :
        console.log("action is received in add")
        
        return state + 1

    case "REMOVE_FROM_CART" :
        console.log("action is reveived in sub");

        return state - 1
        
    default:
        break;
}
return state;*/


}