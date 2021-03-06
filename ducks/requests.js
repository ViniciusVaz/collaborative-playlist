import { handleActions } from 'redux-actions'
// import handleAppAuth from 'utils/handleAppAuth'
import axios from 'axios'
import R from 'ramda'

const AUTH  = '',
      ROOT  = ''

export const requestData = key => ({
  type: 'REQUEST_DATA',
  key,
})

export const setIsLoading = isLoading => ({
  type: 'SET_IS_LOADING',
  isLoading,
})

export const receiveData = (data, key, response) => ({
  type: 'RECEIVE_DATA',
  data,
  key,
  response,
})

export const receiveError = (error, key) => ({
  type: 'RECEIVE_ERROR',
  error,
  key,
})

export const setAuthError = bool => ({ type: 'SET_AUTH_ERROR', bool })

export const pushPromise = promise => ({ type: 'PUSH_PROMISE', promise })

export const setPromise = promise => {
  return {
    type: 'SET_PROMISE',
    promise,
  }
}

export const clearQueue = () => ({ type: 'CLEAR_QUEUE' })

export const removePromise = key => ({ type: 'REMOVE_PROMISE', key })

const createAxiosCall = (dispatch, baseConfig, key, mapper) => () => {
  return new Promise((resolve, reject) => {
    axios({ baseURL: ROOT, ...baseConfig })
      .then(function(res) {
        dispatch(removePromise(key))
        resolve(dispatch(receiveData(mapper(res.data), key, res)))
      })
      .catch(error => {
        console.log('Error in request :error :key', error, key)
        dispatch(receiveError(error, key))
        reject(error)
      })
  })
}

const isAuthentication = url => {
  let authRegex = new RegExp(`${AUTH}`, 'gi')
  return authRegex.test(url)
}

const defaultMapper = value => value

export const fetchData = ({
  url,
  key,
  config = {},
  method = 'get',
  data = null,
  mock = false,
  mapper = defaultMapper,
}) => {
  return (dispatch, getState) => {
    dispatch(requestData(key))

    if (mock) {
      return new Promise((resolve, reject) => {
        return setTimeout(() => {
          resolve(mock)
          return dispatch(receiveData(mapper(mock), key, {}))
        }, 800)
      })
    }

    let baseConfig = {
      url,
      method,
      validateStatus(status) {
        return status >= 200 && status < 300
      },
      ...config,
    }
    
    if (data) {
      baseConfig = {
        ...baseConfig,
        data,
      }
    }

    return new Promise((resolve, reject) => {
      const token =
        getState().requests.appAuth && getState().requests.appAuth.data
          ? getState().requests.appAuth.data.token
          : null
      const { authError } = getState().requests
      const axiosCall = createAxiosCall(dispatch, baseConfig, key, mapper)
      const isAuth = isAuthentication(url)

      if (!isAuth) {
        dispatch(
          pushPromise({
            request: axiosCall,
            resolver: resolve,
            key,
          })
        )
      }

      if (isAuth) {
        axiosCall()
          .then(res => {
            let { promisesQueue } = getState().requests

            promisesQueue.forEach(({ resolver, request }) =>
              resolver(request())
            )
            dispatch(setAuthError(false))
            return resolve(res)
          })
          .catch(reject)
      } else if (token && !authError) {
        axiosCall()
          .then(res => {
            dispatch(removePromise(key))
            return resolve(res)
          })
          .catch(error => {
            reject(error)

            if (
              error.response.status === 401 ||
              error.response.status === 400
            ) {
              dispatch(setAuthError(true))
              let authLoading = getState().requests.appAuth
                ? getState().requests.appAuth.isLoading
                : false

              if (!authLoading) {
                // handleAppAuth(dispatch)
              }
            }
          })
      }
    })
  }
}

export const requestsReducer = handleActions(
  {
    SET_PROMISE: (state, { promise }) => {
      return {
        ...state,
        promises: [promise, ...state.promises],
      }
    },

    PUSH_PROMISE: (state, { promise }) => {
      return {
        ...state,
        promisesQueue: [promise, ...state.promisesQueue],
      }
    },

    CLEAR_QUEUE: state => {
      return {
        ...state,
        promisesQueue: [],
      }
    },

    REMOVE_PROMISE: (state, { key }) => {
      let promisesQueue = state.promisesQueue.filter(
        promise => promise.key !== key
      )
      return {
        ...state,
        promisesQueue,
      }
    },

    SET_AUTH_ERROR: (state, { bool }) => ({
      ...state,
      authError: bool,
    }),

    REQUEST_DATA: (state, { key }) => {
      const obj = { ...state } || {}
      obj[key] = { isLoading: true, error: false }

      return {
        ...state,
        ...obj,
        isLoading: true,
      }
    },

    RECEIVE_DATA: (state, { key, data, response }) => {
      const obj = { ...state } || {}
      obj[key] = {
        data,
        response: {
          headers: response.headers,
        },
        isLoading: false,
        error: false,
      }

      return {
        ...state,
        ...obj,
        isLoading: false,
      }
    },

    RECEIVE_ERROR: (state, { key, error }) => {
      const obj = { ...state } || {},
        requestError = {
          response: {
            data: R.path(['response', 'data'], error),
            headers: R.path(['response', 'data'], error),
          },
          status: error.response ? error.response.status + '' : '',
        }

      obj[key] = {
        error: requestError,
        isLoading: false,
      }

      return {
        ...state,
        ...obj,
        error: requestError,
        isLoading: false,
      }
    },

    SET_IS_LOADING: (state, { isLoading }) => ({
      ...state,
      isLoading,
    }),
  },
  {
    isLoading: false,
    error: false,
    promises: [],
    promisesQueue: [],
    authError: false,
  }
)
