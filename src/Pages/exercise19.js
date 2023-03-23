import { useEffect, useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import Section from "../components/section";

export default function Exercise19() {
	const [salary, setSalary] = useState("");
	const [growth, setGrowth] = useState("");
	const [percentage, setPercentage] = useState("");

	useEffect(() => {
		const salaryOnNumber = parseFloat(salary);
		if (salary === "") {
			setGrowth("");
			setPercentage("");
			return;
		}

		if (salaryOnNumber <= 999) {
			setPercentage(20);
			setGrowth(salary * 1.2 - salary);
			return;
		} else if (salaryOnNumber <= 2999.0) {
			setPercentage(15);
			setGrowth(salary * 1.15 - salary);
			return;
		} else if (salaryOnNumber <= 7999.0) {
			setPercentage(10);
			setGrowth(salary * 1.1 - salary);
			return;
		}

		setPercentage(5);
		setGrowth(salary * 1.05 - salary);
	}, [salary, setGrowth, setPercentage]);

	return (
		<Form>
			<Row>
				<label>Digite o salario da pessoa:</label>
				<Input
					width="100px"
					type="number"
					min="0"
					value={salary}
					onChange={(e) => setSalary(e.target.value)}
				/>
			</Row>
			<Section column start invisible={salary === ""}>
				<p>
					Novo salário = R$ {(parseFloat(salary) + parseFloat(growth)).toFixed(2)}
				</p>
				<p>Aumento = R$ {parseFloat(growth).toFixed(2)}</p>
				<p>Porcentagem = {percentage} %</p>
			</Section>
		</Form>
	);
}
