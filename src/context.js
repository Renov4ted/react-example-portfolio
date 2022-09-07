import { createContext, useReducer, React } from "react"

export const ThemeContext = createContext()

const ThemeState = { darkMode: false }

const themeReducer = (state, action) => {
	switch (action.type) {
	 	case "TOGGLE":
		 	return { darkMode: !state.darkMode }
	 	default:
	 		return state
	}
}
export const ThemeProvider = (props) => {
	const [state, dispatch] = useReducer(themeReducer, ThemeState)

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{/* eslint-disable */}
			{props.children}
            {/* eslint-enable */}
		</ThemeContext.Provider>
	)
}
