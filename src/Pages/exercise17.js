import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import { someInputNotFilled } from "../utils";

export default function Exercise16() {
	const [valueA, setValueA] = useState("");
	const [valueB, setValueB] = useState("");

	function multiples() {
		if (someInputNotFilled({ valueA, valueB })) return "--";

		if (valueA % valueB === 0 || valueB % valueA === 0) return "São múltiplos";
		return "Não são múltiplos";
	}

	return (
		<Form>
			<label>Digite as dois números inteiros:</label>
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

			<Row one>
				<p>{multiples()}</p>
			</Row>
		</Form>
	);
}
