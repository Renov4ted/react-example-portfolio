import React from "react"
import "./productList.css"
import Product from "../product/Product.jsx"
import { products } from "../../data"

const ProductList = () => {
	return (
		<div className="pl">
			<div className="pl-texts">
                
				<h1 className="pl-title">Create & inspire. It`s Fatih</h1>
				<p className="pl-desc">Fatih is a creative portfolio that your work has been waiting Beautiful homos, stunning portfloio styles & a whole lot more awaits inside.</p>
			</div>
			<div className="pl-list">
				{ products.map((item) => (
					<Product link={item.link} img={item.img} key={item.id} />

				))}
				
			</div>
		</div>
	)
}

export default ProductList
