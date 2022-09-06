import React from "react"
import Intro from "./components/intro/index"
import About from "./components/about/index"
import ProductList from "./components/productList/index"
import Contact from "./components/contact/index"

const App = () => {
	return (
		<div>
			<Intro/>
			<About/>
			<ProductList/>
			<Contact/>
		</div>
	)
}


export default App
