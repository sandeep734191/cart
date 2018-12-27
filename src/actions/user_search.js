
const  userSearch=function(obj){
console.log('obj in user_search is'+ obj.name)
    return ({
        type:"USER_SEARCH",
        payload:obj
    })
}
export default userSearch;