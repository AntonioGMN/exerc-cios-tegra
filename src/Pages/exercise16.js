import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import { someInputNotFilled } from "../utils";

export default function Exercise16() {
	const [valueA, setValueA] = useState("");
	const [valueB, setValueB] = useState("");
	const [valueC, setValueC] = useState("");

	function bigger() {
		if (someInputNotFilled({ valueA, valueB, valueC })) return "--";
		let bigger = parseFloat(valueA);

		if (parseFloat(valueB) > bigger) bigger = valueB;
		if (parseFloat(valueC) > bigger) bigger = valueC;

		return parseFloat(bigger).toFixed(2);
	}

	return (
		<Form>
			<label>Digite as três distâncias:</label>
			<Input
				type="number"
				min="0"
				value={valueA}
				onChange={(e) => setValueA(e.target.value)}
			/>
			<Input
				type="number"
				min="0"
				value={valueB}
				onChange={(e) => setValueB(e.target.value)}
			/>
			<Input
				type="number"
				min="0"
				value={valueC}
				onChange={(e) => setValueC(e.target.value)}
			/>
			<Row>
				<p>MAIOR DISTÂNCIA: </p>
				<p>{bigger()}</p>
			</Row>
		</Form>
	);
}
