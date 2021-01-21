import axios from 'axios'

export const addItem = (name, value) => {
  return({
    type: "ADD_VALUES",
    payload: name, value
  })
}

