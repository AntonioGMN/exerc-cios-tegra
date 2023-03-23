import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";

export default function Exercise13() {
	const [minutes, setMinutes] = useState("");

	function price() {
		if (minutes === "") return "--";

		const extraMinutos = parseInt(minutes) - 100;
		return `R$ ${(50 + extraMinutos * 2).toFixed(2)}`;
	}

	return (
		<Form>
			<label>Digite a quantidade de minutos:</label>
			<Input
				type="number"
				min="0"
				value={minutes}
				onChange={(e) => setMinutes(e.target.value)}
			/>
			<Row>
				<p>Valor a pagar:</p>
				<p>{price()}</p>
			</Row>
		</Form>
	);
}
