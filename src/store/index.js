import { configureStore } from '@reduxjs/toolkit'

import homeSlice from './modules/home'
import entireReducer from './modules/entire'

const store = configureStore({
  reducer: {
    home: homeSlice,
    entire: entireReducer,
  },
  devTools: true,
})

export default store
