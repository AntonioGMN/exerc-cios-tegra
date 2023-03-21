import ChangePage from "../components/button";
import Container from "../components/center";
import Section from "../components/section";
import H1 from "../components/title";
import Exercio1 from "./exercio1";

export default function HomePage() {
	return (
		<Container>
			<H1>Exercício 1</H1>
			<Exercio1 />
			<Section>
				<ChangePage> </ChangePage>
				<ChangePage> </ChangePage>
			</Section>
		</Container>
	);
}
