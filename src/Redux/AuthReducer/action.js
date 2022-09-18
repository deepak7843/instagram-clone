import axios from "axios";
import * as types from "./actionTypes"
import { getLocalData } from "../../utils/localStorage";

export const register = (payload) => (dispatch) =>{
    dispatch({type: types.REGISTER_REQUEST});
    return axios
      .post("https://syncthreadsbackend.herokuapp.com/register", payload)
      .then((r)=> {
        dispatch({type: types.REGISTER_SUCCESS, payload: r.data});
        console.log(r.data)
        return types.REGISTER_SUCCESS;
      })
      .catch((e)=> {
        dispatch({type: types.REGISTER_FAILURE,payload: e})
        return types.REGISTER_FAILURE
      })
}


export const login = (params) => (dispatch) =>{
    dispatch({type: types.LOGIN_REQUEST});
    return axios
      .post("https://syncthreadsbackend.herokuapp.com/login", params)
      .then((r)=> {
        dispatch({type: types.LOGIN_SUCCESS, payload: r.data});
        return types.LOGIN_SUCCESS;
      })
      .catch((e)=> {
        dispatch({type: types.LOGIN_FAILURE,payload: e})
        return types.LOGIN_FAILURE
      })
}

export const logoutSuccess = () => (dispatch) => {
  dispatch({ type: types.LOGIN_SUCCESS });
};

