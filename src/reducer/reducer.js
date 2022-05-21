import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const BASE_URI = 'https://dev-api.persada.store'

const UPDATE_STATUS = "UPDATE_STATUS"
const SET_IS_LOADING = "SET_IS_LOADING"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export function updateStatusRedux (payload) {
  return {
    type : UPDATE_STATUS,
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
  isLoading : false
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
        console.log(result)
        // dispatch(setProductToShow(result))
      })
      .catch(error => console.error('error', error));
  })
}

function reducer(state = initialValue, action) {
  switch (action.type) {
    case UPDATE_STATUS:
      return { ...state, thisUserAttendance : action.payload}
    case SET_IS_LOADING:
      return { ...state, isLoading :action.payload}
    default:
      return state
  }
}

// export const store = createStore(reducer)



export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));