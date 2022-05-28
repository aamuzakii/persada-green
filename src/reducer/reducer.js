import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import * as SecureStore from 'expo-secure-store';

// const BASE_URI = 'https://dev-api.persada.store'
const BASE_URI = 'https://7426-140-213-13-125.ap.ngrok.io'


const UPDATE_STATUS = "UPDATE_STATUS"
const SET_IS_LOADING = "SET_IS_LOADING"
const SET_ADMIN_TOKEN = "SET_ADMIN_TOKEN"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export function updateStatusRedux (payload) {
  return {
    type : UPDATE_STATUS,
    payload
  }
}

export function setAdminToken (payload) {
  console.log("masuk")
  return {
    type : SET_ADMIN_TOKEN,
    payload
  }
}

export function setIsLoadingRedux (payload) {
  return {
    type : SET_IS_LOADING,
    payload
  }
}

const initialValue = {
  thisUserAttendance : {},
  isLoading : false,
  adminToken : '',
}

export function fetchAllProducts() {
  return ((dispatch) => {
    let url = `${BASE_URI}/products`

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        // dispatch(setProductToShow(result))
      })
      .catch(error => console.error('error', error));
  })
}

export function postOrder(payload) {
  return ((dispatch) => {
    let url = `${BASE_URI}/orders`

    let header = new Headers();
    header.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: header,
      body: JSON.stringify(payload)
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setProductByCategory(result))
      })
      .catch(error => console.error('error', error));
  })
}

export function postNewProduct(payload) {

  return ((dispatch) => {
    let url = `${BASE_URI}/products`

    let header = new Headers();
    header.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: header,
      body: JSON.stringify(payload)
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setProductByCategory(result))
      })
      .catch(error => console.error('error', error));
  })
}

export function requestOTP(payload) {
  return ((dispatch) => {
    let url = `${BASE_URI}/authentications/request_otp`

    let header = new Headers();
    header.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: header,
      body: JSON.stringify(payload)
    };
    
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then( async (result) => {
        if (result.token) {
          await SecureStore.setItemAsync("token", result.token);
          dispatch(setAdminToken(result.token))
        }
      })
      .catch(error => console.error('error', error));
  })
}

function reducer(state = initialValue, action) {
  switch (action.type) {
    case UPDATE_STATUS:
      return { ...state, thisUserAttendance : action.payload}
    case SET_ADMIN_TOKEN:
      return { ...state, adminToken : action.payload}
    case SET_IS_LOADING:
      return { ...state, isLoading :action.payload}
    default:
      return state
  }
}

// export const store = createStore(reducer)



export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));