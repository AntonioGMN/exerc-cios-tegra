import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Section from "../components/section";
import { handlerInput } from "../utils";

export default function Exercise2() {
	const [dimensions, setDimensions] = useState({
		width: "",
		height: "",
	});

	function area() {
		if (dimensions.width === "" || dimensions.height === "") return 0;
		return (dimensions.width * dimensions.height).toFixed(4);
	}

	function perimetro() {
		if (area() === 0) return 0;
		return (2 * dimensions.width + 2 * dimensions.height).toFixed(4);
	}

	function diametro() {
		if (area() === 0) return 0;
		const x = Math.pow(dimensions.width, 2);
		const y = Math.pow(dimensions.height, 2);
		return Math.sqrt(x + y).toFixed(4);
	}

	return (
		<Form>
			<label>Digite o base do relangulo</label>
			<Input
				type="number"
				name="width"
				value={dimensions.width}
				onChange={(e) => handlerInput(dimensions, setDimensions, e)}
			/>
			<label>Digite a a altura do relangulo</label>
			<Input
				type="number"
				name="height"
				value={dimensions.height}
				onChange={(e) => handlerInput(dimensions, setDimensions, e)}
			/>
			<Section>
				<div>
					<p>Área do relangulo:</p>
					<span>{area()}</span>
				</div>
				<div>
					<p>Perimetro do relangulo:</p>
					<span>{perimetro()}</span>
				</div>
				<div>
					<p>Diamentro do relangulo:</p>
					<span>{diametro()}</span>
				</div>
			</Section>
		</Form>
	);
}
