import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import Exercise1 from "./Pages/exercise1";
import Exercise2 from "./Pages/exercise2";
import Exercise3 from "./Pages/exercise3";
import Exercise4 from "./Pages/exercise4";
import Exercise5 from "./Pages/exercise5";
import Exercise6 from "./Pages/exercise6";
import Exercise7 from "./Pages/exercise7";
import Exercise8 from "./Pages/exercise8";
import Exercise9 from "./Pages/exercise9";
import Exercise10 from "./Pages/exercise10";
import Exercise11 from "./Pages/exercise11";
import Exercise12 from "./Pages/exercise12";
import Exercise13 from "./Pages/exercise13";
import Exercise14 from "./Pages/exercise14";
import Exercise15 from "./Pages/exercise15";
import Exercise16 from "./Pages/exercise16";
import Exercise17 from "./Pages/exercise17";
import Exercise18 from "./Pages/exercise18";
import Exercise19 from "./Pages/exercise19";
import Exercise20 from "./Pages/exercise20";
import Exercise21 from "./Pages/exercise21";
import Exercise22 from "./Pages/exercise22.js";
import Exercise23 from "./Pages/exercise23.js";
import Exercise24 from "./Pages/exercise24.js";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route index element={<Navigate to="/exercise/1" />} />
					<Route path="/exercise/1" element={<Exercise1 />} />
					<Route path="/exercise/2" element={<Exercise2 />} />
					<Route path="/exercise/3" element={<Exercise3 />} />
					<Route path="/exercise/4" element={<Exercise4 />} />
					<Route path="/exercise/5" element={<Exercise5 />} />
					<Route path="/exercise/6" element={<Exercise6 />} />
					<Route path="/exercise/7" element={<Exercise7 />} />
					<Route path="/exercise/8" element={<Exercise8 />} />
					<Route path="/exercise/9" element={<Exercise9 />} />
					<Route path="/exercise/10" element={<Exercise10 />} />
					<Route path="/exercise/11" element={<Exercise11 />} />
					<Route path="/exercise/12" element={<Exercise12 />} />
					<Route path="/exercise/13" element={<Exercise13 />} />
					<Route path="/exercise/14" element={<Exercise14 />} />
					<Route path="/exercise/15" element={<Exercise15 />} />
					<Route path="/exercise/16" element={<Exercise16 />} />
					<Route path="/exercise/17" element={<Exercise17 />} />
					<Route path="/exercise/18" element={<Exercise18 />} />
					<Route path="/exercise/19" element={<Exercise19 />} />
					<Route path="/exercise/20" element={<Exercise20 />} />
					<Route path="/exercise/21" element={<Exercise21 />} />
					<Route path="/exercise/22" element={<Exercise22 />} />
					<Route path="/exercise/23" element={<Exercise23 />} />
					<Route path="/exercise/24" element={<Exercise24 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
