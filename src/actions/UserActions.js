import * as types from './ActionTypes';

export const login = (username, password) => {
    return ((dispatch) => {
      dispatch(requestLogin(types.STATE_PROCESSING))
      let headers = {
        "Content-Type": "application/json",                                                                                                
        "Access-Control-Origin": "*"
     }
      return fetch("https://reqres.in/api/login", {
        body: JSON.stringify({ "email" : username, "password": password}),
        headers: headers,
        method: "POST"
      })
        .then(response => dispatch(requestLogin(types.STATE_SUCCESS, response.status)))
        .catch(error => dispatch(requestLogin(types.STATE_FAILURE, JSON.parse(error.message)))
        )
    })
  }

  export const logout = () => {
    return ((dispatch) => {
        dispatch(clearLoginState())
    }
    )
  
  }


  export const clearLoginState = () => ({
    type: types.LOGOUT,
    state: types.LOGGED_OUT,
  })
  
  export const requestLogin = (status , requestStatus) => ({
    type: types.REQUEST_LOGIN,
    state: status,
    requestStatus, 
  })