import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import { handlerInput, someInputNotFilled } from "../utils";

export default function Exercise7() {
	const [travel, setTravel] = useState({
		length: "",
		gasCost: "",
	});

	function expense() {
		const { length, gasCost } = travel;
		if (someInputNotFilled(travel)) return "--";

		return (length / gasCost).toFixed(3);
	}

	return (
		<Form>
			<label>Digite a distácia percorrida</label>
			<Input
				type="number"
				min="0"
				name="length"
				value={travel.length}
				onChange={(e) => handlerInput(travel, setTravel, e)}
			/>
			<label>Digite a quantidade de combustível gasto</label>
			<Input
				type="number"
				min="0"
				name="gasCost"
				value={travel.gasCost}
				onChange={(e) => handlerInput(travel, setTravel, e)}
			/>
			<Row>
				<p>Consumo médio:</p>
				<p>{expense()}</p>
			</Row>
		</Form>
	);
}
