import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPrice } from '@/servers/modules/home'
// 异步操作
export const homeGoodsPrice = createAsyncThunk(
  'goodsPrice',
  (state, { dispatch, getState }) => {
    getHomeGoodPrice().then((res) => {
      dispatch(getGoodPrice(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    user: {
      name: 'lxy',
    },
    goodPrice: {},
  },
  reducers: {
    getGoodPrice(state, { payload }) {
      state.goodPrice = payload
    },
  },
})
export const { getGoodPrice } = homeSlice.actions
export default homeSlice.reducer
