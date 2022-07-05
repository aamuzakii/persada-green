import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import * as SecureStore from 'expo-secure-store';

const BASE_URI = 'https://dev-api.persada.store'


const UPDATE_STATUS = "UPDATE_STATUS"
const SET_IS_LOADING = "SET_IS_LOADING"
const SET_ADMIN_TOKEN = "SET_ADMIN_TOKEN"
const SET_ORDER_BY_TYPE = "SET_ORDER_BY_TYPE"
const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS"
const SET_SHOWN_PRODUCTS = "SET_SHOWN_PRODUCTS"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export function updateStatusRedux (payload) {
  return {
    type : UPDATE_STATUS,
    payload
  }
}

export function setAdminToken (payload) {
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

export function setAllProducts (payload) {
  return {
    type : SET_ALL_PRODUCTS,
    payload
  }
}

export function setShownProducts (payload) {
  return {
    type : SET_SHOWN_PRODUCTS,
    payload
  }
}

const initialValue = {
  thisUserAttendance : {},
  isLoading : false,
  adminToken : '',
  orderByType : [],
  allProducts : [],
  shownProducts : [],
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
        dispatch(setAllProducts(result))
        dispatch(setShownProducts(result))
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

export function passwordLogin(payload) {
  return ((dispatch) => {
    let url = `${BASE_URI}/authentications/password_login`

    let header = new Headers();
    header.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: header,
      body: JSON.stringify(payload)
    };
    console.log(payload)
    
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then( async (result) => {
        console.log(result)
        if (result.token) {
          await SecureStore.setItemAsync("token", result.token);
          dispatch(setAdminToken(result.token))
        }
      })
      .catch(error => console.error('error', error));
  })
}

export function setOrderByType(input) {
  return {
    type: SET_ORDER_BY_TYPE,
    payload: input
  }
}

export function fetchOrderByStatus(status) {
  return ( async (dispatch) => {
    let url = `${BASE_URI}/orders/index_by_status?status=${status}`
    
    let header = new Headers();
    const token = await SecureStore.getItemAsync("token");
    header.append("Authorization", token);
  
    let requestOptions = {
      method: 'GET',
      headers: header,
    };

    // dispatch(setIsLoading(true))
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setOrderByType(result))
      })
      .finally(()=> {
        // dispatch(setIsLoading(false))
      })
      .catch(error => console.error('error', error));
  })
} 

function reducer(state = initialValue, action) {
  switch (action.type) {
    case SET_ORDER_BY_TYPE:
      return { ...state, orderByType : action.payload}
    case SET_ADMIN_TOKEN:
      return { ...state, adminToken : action.payload}
    case SET_IS_LOADING:
      return { ...state, isLoading :action.payload}
    case SET_ALL_PRODUCTS:
      return { ...state, allProducts :action.payload}
    case SET_SHOWN_PRODUCTS:
      return { ...state, shownProducts :action.payload}
    default:
      return state
  }
}

// export const store = createStore(reducer)



export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));