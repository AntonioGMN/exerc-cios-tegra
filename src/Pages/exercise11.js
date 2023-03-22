import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import Section from "../components/section";
import { someInputNotFilled } from "../utils";

export default function Exercise11() {
	const [valueA, setValueA] = useState("");
	const [valueB, setValueB] = useState("");

	function finalResult() {
		if (someInputNotFilled({ valueA, valueB })) return "--";

		console.log(parseFloat(valueA) + parseFloat(valueB));
		return (parseFloat(valueA) + parseFloat(valueB)).toFixed(1);
	}

	function visible() {
		if (someInputNotFilled({ valueA, valueB })) return "--";
		if (finalResult() >= 60) return true;

		return false;
	}

	return (
		<Form>
			<label>Digite a primeira nota:</label>
			<Input
				type="number"
				min="0"
				value={valueA}
				onChange={(e) => setValueA(e.target.value)}
			/>
			<label>Digite a segunda nota:</label>
			<Input
				type="number"
				min="0"
				value={valueB}
				onChange={(e) => setValueB(e.target.value)}
			/>
			<Row>
				<p>NOTA FINAL:</p>
				<p>{finalResult()}</p>
			</Row>
			<Section invisible={visible()}>
				<p>REPROVADO</p>
			</Section>
		</Form>
	);
}
