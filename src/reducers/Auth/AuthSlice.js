import { createSlice } from '@reduxjs/toolkit'
const initialState = { isAuth: false }
const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		auth(state, payload) {},
	},
})
export const authActions = authSlice.authActions
export default authSlice
