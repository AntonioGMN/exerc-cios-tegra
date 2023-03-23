import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";

export default function Exercise15() {
	const [amount, setAmount] = useState("");

	function classification() {
		if (amount === "") return "--";

		if (amount <= 100) return "Normal";
		else if (amount <= 140) return "Elevado";

		return "Diabetes";
	}

	return (
		<Form>
			<label>Digite a medida da glicose:</label>
			<Input
				type="number"
				min="0"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
			/>
			<Row>
				<p>Segundos em horas:</p>
				<p>{classification()}</p>
			</Row>
		</Form>
	);
}
