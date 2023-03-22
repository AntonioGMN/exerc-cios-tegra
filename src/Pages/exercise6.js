import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Section from "../components/section";
import { handlerInput, someInputNotFilled } from "../utils";

export default function Exercise6() {
	const [employee, setEmployee] = useState({
		name: "",
		workHours: "",
		workHoursValue: "",
	});

	function payment() {
		const { name, workHours, workHoursValue } = employee;
		if (someInputNotFilled(employee)) return "--";

		return `O pagamento para ${name} deve ser de ${(
			workHours * workHoursValue
		).toFixed(2)}`;
	}

	return (
		<Form>
			<label>Digite o nome do funcionário</label>
			<Input
				type="text"
				name="name"
				value={employee.name}
				onChange={(e) => handlerInput(employee, setEmployee, e)}
			/>
			<label>Digite valor por hora de trabalho</label>
			<Input
				type="number"
				min="0"
				name="workHoursValue"
				value={employee.workHoursValue}
				onChange={(e) => handlerInput(employee, setEmployee, e)}
			/>
			<label>Dinheiro as horas trabalhadas</label>
			<Input
				type="number"
				min="0"
				name="workHours"
				value={employee.workHours}
				onChange={(e) => handlerInput(employee, setEmployee, e)}
			/>
			<Section center>
				<p>{payment()}</p>
			</Section>
		</Form>
	);
}
