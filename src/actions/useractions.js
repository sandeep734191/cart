import {userConstants} from '../constants/user.constant';
import {userService} from '../services/user.service';
export const userActions = {
    login,
    logout,
    register,
    setCurrentUser
   
};
function setCurrentUser(user){
    return({
        type:'USERS_LOGIN_SUCCESS',
        user:user
    })
};

function login(username, password) {
    return dispatc => {
        dispatc(request({ username }));
        

        userService.login(username, password)
            .then(
                user => { 
                    console.log('inside user action'+ user)
                    dispatc(success(user));
                  //  return Promise.resolve()
                    //history.push('/');
                },
                error => {
                    dispatc(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                }
            );
    };
    
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
  ;
}

function logout() {
    alert('logout called');
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                   // history.push('/login');
                    //dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                   // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

