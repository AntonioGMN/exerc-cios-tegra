import { Outlet, useHref, useNavigate } from "react-router-dom";
import ChangePage from "../components/button";
import Container from "../components/center";
import Section from "../components/section";
import H1 from "../components/title";

export default function HomePage() {
	const navigate = useNavigate();
	const curretExercise = parseInt(useHref().split("exercise/")[1]);

	return (
		<Container>
			<H1>Exercício {curretExercise}</H1>
			<Outlet />
			<Section>
				<ChangePage
					disabled={curretExercise === 1}
					onClick={() => navigate(`/exercise/${curretExercise - 1}`)}
				>
					-
				</ChangePage>
				<ChangePage
					disabled={curretExercise === 30}
					onClick={() => navigate(`/exercise/${curretExercise + 1}`)}
				>
					+
				</ChangePage>
			</Section>
		</Container>
	);
}
