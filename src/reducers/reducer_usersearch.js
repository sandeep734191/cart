

var save='';
export default function (state = null, action) {
    switch (action.type) {
        case "USER_SEARCH":
            if(action.payload.name===''){
                save=null;
                return null
            }
            console.log(action.payload.name)
            save=action.payload.name;        
            return save;
        

        default:
                    if(save!=null){
                        return save;
                    }
                    return null;
        

    }
    
}