var save={'name':null}
export default function (state = null, action) {
    switch (action.type) {
        case "USER_SEARCH":
            if(action.payload.name===''){
                return null
            }
            save['name']=action.payload.name;        
            return action.payload
        

        default:
                    if(save['name']!==null){
                        return save;
                    }
                    return null;
        

    }
    
}