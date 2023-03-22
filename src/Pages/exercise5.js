import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";

export default function Exercise5() {
	const [radius, setRadius] = useState("");

	function areaCircle() {
		if (radius === "") return "--";

		return (Math.pow(radius, 2) * 3.14159).toFixed(3);
	}

	return (
		<Form>
			<label>Digite o raio do círculo</label>
			<Input
				type="number"
				min="0"
				value={radius}
				onChange={(e) => setRadius(e.target.value)}
			/>
			<Row>
				<p>Área:</p>
				<p>{areaCircle()}</p>
			</Row>
		</Form>
	);
}
