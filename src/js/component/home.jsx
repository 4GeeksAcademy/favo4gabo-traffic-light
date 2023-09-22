import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectcolor, setSelectcolor] = useState("");

	return (			
		<div className="traffic-light">
			<div 
				onClick={() => setSelectcolor ("red")}
				className={"light red" + (selectcolor == "red" ? " glow" : "")}></div>
			<div 
				onClick={ () => setSelectcolor ("yellow")}
				className={"light yellow" + (selectcolor == "yellow" ? " glow" : "")}></div>
			<div 
				onClick={() => setSelectcolor ("green")}
				className={"light green" + (selectcolor == "green" ? " glow" : "")}></div>
		</div>
	);
};

export default Home;
