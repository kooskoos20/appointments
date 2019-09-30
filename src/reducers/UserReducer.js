import * as types from '../actions/ActionTypes'

const initialState = {}

const UserReducer = (state = initialState, action) => {
  if (types.REQUEST_LOGIN === action.type) {
    return { ...state, loginState: action.state, requestStatus: action.requestStatus }
  }
  
  if(types.LOGOUT === action.type){
    return {...state, loginState: action.state} 
  }
  
  return state;
}

export default UserReducer;