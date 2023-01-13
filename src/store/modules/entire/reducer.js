import { increment } from './constants'
const initialState = {
  count: 1,
}
function entire(state = initialState, action) {
  switch (action.type) {
    case increment:
      return { ...state, count: state.count + action.count }
    default:
      return state
  }
}
export default entire
