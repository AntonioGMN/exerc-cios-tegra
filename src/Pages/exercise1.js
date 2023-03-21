import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Section from "../components/section";
import { handlerInput } from "../utils";

export default function Exercise1() {
	const [dimensions, setDimensions] = useState({
		width: "",
		length: "",
		value: "",
	});

	function area() {
		if (dimensions.width === "" || dimensions.length === "") return 0;
		return (dimensions.width * dimensions.length).toFixed(2);
	}

	function price() {
		if (area() === 0 || dimensions.value === "") return 0;
		return (area() * dimensions.value).toFixed(2);
	}

	return (
		<>
			<Form>
				<label>Digite o comprimento do terreno</label>
				<Input
					type="number"
					name="width"
					value={dimensions.width}
					onChange={(e) => handlerInput(dimensions, setDimensions, e)}
				/>
				<label>Digite a largura do terreno</label>
				<Input
					type="number"
					name="length"
					value={dimensions.length}
					onChange={(e) => handlerInput(dimensions, setDimensions, e)}
				/>
				<label>Digite o valor do metro quadrado do terreno</label>
				<Input
					type="number"
					name="value"
					value={dimensions.value}
					onChange={(e) => handlerInput(dimensions, setDimensions, e)}
				/>
				<Section>
					<div>
						<p>Área do terreno:</p>
						<span>{area()}</span>
					</div>
					<div>
						<p>Preço do terreno:</p>
						<span type="text">{price()}</span>
					</div>
				</Section>
			</Form>
		</>
	);
}
