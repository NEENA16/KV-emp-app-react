// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './slices/counterSlice'

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })


import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {empApi} from '../services/api'

export const store = configureStore({
  reducer: {
    [empApi.reducerPath]: empApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(empApi.middleware),
})

setupListeners(store.dispatch)