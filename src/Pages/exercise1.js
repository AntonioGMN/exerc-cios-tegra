import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import { handlerInput } from "../utils";

export default function Exercise1() {
	const [dimensions, setDimensions] = useState({
		width: "",
		length: "",
		value: "",
	});

	function area() {
		if (dimensions.width === "" || dimensions.length === "") return "--";
		return (dimensions.width * dimensions.length).toFixed(2);
	}

	function price() {
		if (area() === 0 || dimensions.value === "") return "--";
		return (area() * dimensions.value).toFixed(2);
	}

	return (
		<>
			<Form>
				<label>Digite o comprimento do terreno</label>
				<Input
					type="number"
					min="0"
					name="width"
					value={dimensions.width}
					onChange={(e) => handlerInput(dimensions, setDimensions, e)}
				/>
				<label>Digite a largura do terreno</label>
				<Input
					type="number"
					min="0"
					name="length"
					value={dimensions.length}
					onChange={(e) => handlerInput(dimensions, setDimensions, e)}
				/>
				<label>Digite o valor do metro quadrado do terreno</label>
				<Input
					type="number"
					min="0"
					name="value"
					value={dimensions.value}
					onChange={(e) => handlerInput(dimensions, setDimensions, e)}
				/>
				<Row>
					<p>Área do terreno:</p>
					<p>{area()}</p>
				</Row>
				<Row>
					<p>Preço do terreno:</p>
					<p type="text">{price()}</p>
				</Row>
			</Form>
		</>
	);
}
