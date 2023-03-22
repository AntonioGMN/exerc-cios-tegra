import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import { someInputNotFilled } from "../utils";

export default function Exercise10() {
	const [valueA, setValueA] = useState("");
	const [valueB, setValueB] = useState("");
	const [valueC, setValueC] = useState("");

	function smaller() {
		if (someInputNotFilled({ valueA, valueB, valueC })) return "--";
		let smaller = parseInt(valueA);

		if (parseInt(valueB) < smaller) smaller = valueB;
		if (parseInt(valueC) < smaller) smaller = valueC;

		return smaller;
	}

	return (
		<Form>
			<label>Primeiro valor:</label>
			<Input
				type="number"
				min="0"
				value={valueA}
				onChange={(e) => setValueA(e.target.value)}
			/>
			<label>Segundo valor:</label>
			<Input
				type="number"
				min="0"
				value={valueB}
				onChange={(e) => setValueB(e.target.value)}
			/>
			<label>Terceiro valor:</label>
			<Input
				type="number"
				min="0"
				value={valueC}
				onChange={(e) => setValueC(e.target.value)}
			/>
			<Row>
				<p>Menor:</p>
				<p>{smaller()}</p>
			</Row>
		</Form>
	);
}
