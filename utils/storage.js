import isClient from './isClient'

const storageKey = `db-manager`

export const loadState = () => {
  if (isClient()) {
    const state = localStorage.getItem(storageKey)
    return JSON.parse(state)
  }
}

export const saveState = state => {
  if (isClient()) {
    localStorage.setItem(storageKey, JSON.stringify(state))
    return true
  }
}

export const addToState = state => {
  if (isClient()) {
    const loadedState = loadState()

    const newState = {
      ...loadedState,
      ...state,
    }

    saveState(newState)

    return true
  }
}
