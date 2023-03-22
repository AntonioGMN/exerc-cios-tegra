import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import { handlerInput } from "../utils";

export default function Exercise2() {
	const [dimensions, setDimensions] = useState({
		width: "",
		height: "",
	});

	function area() {
		if (dimensions.width === "" || dimensions.height === "") return "--";
		return (dimensions.width * dimensions.height).toFixed(4);
	}

	function perimetro() {
		if (area() === "--") return "--";
		return (2 * dimensions.width + 2 * dimensions.height).toFixed(4);
	}

	function diametro() {
		if (area() === "--") return "--";
		const x = Math.pow(dimensions.width, 2);
		const y = Math.pow(dimensions.height, 2);
		return Math.sqrt(x + y).toFixed(4);
	}

	return (
		<Form>
			<label>Digite o base do relangulo</label>
			<Input
				type="number"
				min="0"
				name="width"
				value={dimensions.width}
				onChange={(e) => handlerInput(dimensions, setDimensions, e)}
			/>
			<label>Digite a a altura do relangulo</label>
			<Input
				type="number"
				min="0"
				name="height"
				value={dimensions.height}
				onChange={(e) => handlerInput(dimensions, setDimensions, e)}
			/>
			<Row>
				<p>Área do relangulo:</p>
				<p>{area()}</p>
			</Row>
			<Row>
				<p>Perimetro do relangulo:</p>
				<p>{perimetro()}</p>
			</Row>
			<Row>
				<p>Diamentro do relangulo:</p>
				<p>{diametro()}</p>
			</Row>
		</Form>
	);
}
