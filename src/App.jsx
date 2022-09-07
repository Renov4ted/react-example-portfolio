import { useContext, React } from "react"
import Intro from "./components/intro/index"
import About from "./components/about/index"
import ProductList from "./components/productList/index"
import Contact from "./components/contact/index"
import Toggle from "./components/toggle/index"
import { ThemeContext } from "./context"

const App = () => {

	const theme = useContext(ThemeContext)
	const darkMode = theme.state.darkMode
	return (
		<div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
			<Toggle/>
			<Intro/>
			<About/>
			<ProductList/>
			<Contact/>
		</div>
	)
}


export default App
