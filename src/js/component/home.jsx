import React, { useState , useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="container">
			<div className="second">
				<i className="far fa-clock"></i>{" "}
			</div>
			<div className="second">{Math.floor(props.contador/100000%10)}</div>
			<div className="second">{Math.floor(props.contador/10000%10)}</div>
			<div className="second">{Math.floor(props.contador/1000%10)}</div>
			<div className="second">{Math.floor(props.contador/100%10)}</div>
			<div className="second">{Math.floor(props.contador/10%10)}</div>
			<div className="second">{Math.floor(props.contador/1%10)}</div>
		</div>
	);
};
const Home = () => {
	const [count, setCount] = useState(0)
	
	useEffect(() => {
		setInterval(() => {
			setCount(count => count + 1)
		}, 1000)
	}, [])

	return (
		<div>
			<SecondsCounter contador={count}/>
		</div>
	);
};

export default Home;
