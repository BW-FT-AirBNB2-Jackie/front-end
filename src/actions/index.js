import { axiosWithAuth } from '../utils/axiosWithAuth';



export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'


export const loginUser = (signIn, props) => dispatch => {
    dispatch({ type: LOGIN_START }) 
    
    axiosWithAuth()
    .post(`/auth/landowners/login`, signIn)
    .then(res=> {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user_id', res.data.id)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        props.history.push(`/profile/${res.data.id}`)

        
    })
    .catch(err=>dispatch({ type: LOGIN_ERROR }))
}


export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const registerUser = (user) => dispatch => {
    dispatch({ type: REGISTER_START })

    axiosWithAuth().post(`/auth/landowners/register`, user)
    .then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        
    })
    .catch(err =>
    dispatch({type: REGISTER_ERROR }))
}


export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";



export const getUser = (props) => dispatch => {
    dispatch({type: GET_USER_REQUEST});
    const id = localStorage.getItem('user_id');
    console.log(id)
    axiosWithAuth().get(`/listings/${id}`)   
    .then(res => {
        console.log(res)
        dispatch({
            type:GET_USER_SUCCESS, payload: res.data
        })
        props.history.push(`/profile/${id}`)
    })
    .catch(error => 
        dispatch({
        type: GET_USER_FAILURE 
    }))
}


export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";


export const addUser = (input, props) => dispatch => {
    dispatch({type: ADD_USER_REQUEST});
    const id = localStorage.getItem('user_id');
    axiosWithAuth().post(`/listings`, input)
    .then(res => {
        console.log(res)
        dispatch({type: ADD_USER_SUCCESS, payload: res.data})
        console.log('added item', res.data)
        props.history.push(`/profile/${id}`)
        
    })
    .catch(err => dispatch({type: ADD_USER_FAILURE }))


}



export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const deleteUser = (input, props) => dispatch => {
    dispatch({ type: DELETE_USER_REQUEST});
    const id = localStorage.getItem('user_id');
    axiosWithAuth().delete(`/listings/${id}`)
    .then(res => {
        console.log(res)
        dispatch({type: DELETE_USER_SUCCESS, payload: res.data})
        console.log('deleted item', res.data)
        props.history.push(`/profile/${id}`)
    })
    .catch(err => dispatch({type: DELETE_USER_FAILURE }))
}

