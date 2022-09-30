import { configureStore } from '@reduxjs/toolkit'
import darkModeSlice from '../reducers/darkMode/darkModeSlice'
import authSlice from '../reducers/Auth/AuthSlice'
export const store = configureStore({
	reducer: { darkMode: darkModeSlice.reducer, auth: authSlice.reducer },
})
