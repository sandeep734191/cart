import isEmpty from 'lodash/isEmpty';
const initialState={
    isAuthenticated:false,
    user:{}
};

export default (state=initialState,action={})=>{
    switch(action.type){
        case 'USERS_LOGIN_SUCCESS' :
                console.log(action.user.user)
                    return {
                        isAuthenticated:!isEmpty(action.user)
                        ,user:action.user.user
                    };
        default:
        return state;
    }
}