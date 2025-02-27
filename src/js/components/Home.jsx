import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx"

const cards = [
	{
		image: "https://picsum.photos/id/22/500/325",
		title: "Card Title",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores excepturi non illum dolorum eos incidunt dignissimos in deleniti alias iusto ipsum rerum quibusdam, placeat saepe officiis soluta iste odit."
	},
	{
		image: "https://picsum.photos/id/26/500/325",
		title: "Card Title",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores excepturi non illum dolorum eos incidunt dignissimos in deleniti alias iusto ipsum rerum quibusdam, placeat saepe officiis soluta iste odit."
	},
	{
		image: "https://picsum.photos/id/32/500/325",
		title: "Card Title",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores excepturi non illum dolorum eos incidunt dignissimos in deleniti alias iusto ipsum rerum quibusdam, placeat saepe officiis soluta iste odit."
	},
	{
		image: "https://picsum.photos/id/36/500/325",
		title: "Card Title",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores excepturi non illum dolorum eos incidunt dignissimos in deleniti alias iusto ipsum rerum quibusdam, placeat saepe officiis soluta iste odit."
	},
];

const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;