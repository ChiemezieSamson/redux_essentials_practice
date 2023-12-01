import { configureStore } from '@reduxjs/toolkit'
import notificationsReducer from '../feature/notifications/notificationsSlice'
import { apiSlice } from '../feature/api/apiSlice'

export default configureStore({
  reducer: {
    notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
