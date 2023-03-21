import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Section from "../components/section";
import { handlerInput } from "../utils";

export default function Exercise3() {
	const [people1, setPeople1] = useState({
		name: "",
		age: "",
	});

	const [people2, setPeople2] = useState({
		name: "",
		age: "",
	});

	function middleAge() {
		return ((parseInt(people1.age) + parseInt(people2.age)) / 2).toFixed(1);
	}

	function show() {
		return (
			people1.name === "" ||
			people1.age === "" ||
			people2.name === "" ||
			people2.age === ""
		);
	}

	return (
		<Form>
			<label>Nome1</label>
			<Input
				type="text"
				name="name"
				value={people1.name}
				onChange={(e) => handlerInput(people1, setPeople1, e)}
			/>
			<label>Idade</label>
			<Input
				type="number"
				name="age"
				value={people1.age}
				onChange={(e) => handlerInput(people1, setPeople1, e)}
			/>
			<label>Nome2</label>
			<Input
				type="text"
				name="name"
				value={people2.name}
				onChange={(e) => handlerInput(people2, setPeople2, e)}
			/>
			<label>Idade</label>
			<Input
				type="number"
				name="age"
				value={people2.age}
				onChange={(e) => handlerInput(people2, setPeople2, e)}
			/>
			<Section invisible={show()}>
				<p>
					A idade média entre {people1.name} e {people2.name} é de {middleAge()} anos
				</p>
			</Section>
		</Form>
	);
}
