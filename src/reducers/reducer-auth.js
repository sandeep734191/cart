import isEmpty from 'lodash/isEmpty';
const initialState={
    isAuthenticated:false,
    user:{}
};

export default (state=initialState,action={})=>{
    console.log('reached the reducer auth');
    switch(action.type){
        case 'USERS_LOGIN_SUCCESS' :
                console.log(action.user.user)
                    return {
                        isAuthenticated:!isEmpty(action.user)
                        ,user:action.user.user
                    };
        case 'USERS_LOGOUT':
                    console.log('logout reducer')
                    return {
                        isAuthenticated:false
                    }
        default:
        return state;
    }
}