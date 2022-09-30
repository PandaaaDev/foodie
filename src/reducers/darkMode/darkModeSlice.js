import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	isOn: false,
}
const darkModeSlice = createSlice({
	name: 'darkMode',
	initialState,
	reducers: {
		toggle(state) {
			state.isOn = !state.isOn
		},
		on(state) {
			state.isOn = true
		},
		off(state) {
			state.isOn = false
		},
	},
})
export default darkModeSlice
