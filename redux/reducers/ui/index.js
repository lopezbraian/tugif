import { SET_LOADING } from "../../types"
const initialState = {
  loading: false,
}

export default function reducerUi(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      }
      break
    default:
      return state
  }
}
