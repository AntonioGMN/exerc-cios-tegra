import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Section from "../components/section";

export default function Exercise29() {
	const [cnpj, setCNPJ] = useState("");

	function formatCNPJ(e) {
		let cleanText = e.target.value.replace(/\-|\.|\/+/g, "");

		let maskText = cleanText.replace(/^(\d{2})(\d)/, "$1.$2");

		maskText = maskText.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");

		maskText = maskText.replace(/\.(\d{3})(\d)/, ".$1/$2");

		maskText = maskText.replace(/(\d{4})(\d)/, "$1-$2");

		setCNPJ(maskText);
	}

	function validateCNPJ() {
		if (cnpj === "") return "--";
		let cleanCNPJ = cnpj.replace(/\-|\.|\/+/g, "");
		console.log(cleanCNPJ);

		if (cleanCNPJ.length !== 14) return "Inválido";

		const fristValidateNumber = parseInt(cleanCNPJ.at(-2));
		const segundValidateNumber = parseInt(cleanCNPJ.at(-1));
		const multipliers = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

		let sum = 0;
		for (let i = 0; i < multipliers.length; i++) {
			sum += parseInt(cleanCNPJ[i]) * multipliers[i];
		}

		if (sum % 11 < 2 && fristValidateNumber !== 0) return "Inválido";
		if (fristValidateNumber !== 11 - (sum % 11)) return "Inálido";

		multipliers.unshift("6");
		sum = 0;
		for (let i = 0; i < multipliers.length; i++) {
			sum += parseInt(cleanCNPJ[i]) * multipliers[i];
		}

		if (sum % 11 < 2 && segundValidateNumber !== 0) return "Inválido";
		if (segundValidateNumber !== 11 - (sum % 11)) return "Inválido";

		return "Válido";
	}

	return (
		<Form>
			<label>CNPJ:</label>
			<Input
				maxLength={18}
				type="text"
				value={cnpj}
				onChange={(e) => formatCNPJ(e)}
			/>
			<Section>
				<p>{validateCNPJ()}</p>
			</Section>
		</Form>
	);
}
