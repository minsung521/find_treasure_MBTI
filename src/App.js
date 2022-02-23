import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AllResultPage from "./pages/AllResultPage";
import DeveloperPage from "./pages/DeveloperPage";

function App() {
	return (
		<Routes>
			<Route
				exact
				path="/"
				render={(props) => <LandingPage props={props} />}
			></Route>
			<Route
				exact
				path="/all"
				render={(props) => <AllResultPage props={props} />}
			></Route>
			<Route
				path="/makers"
				render={(props) => <DeveloperPage props={props} />}
			></Route>
		</Routes>
	);
}

export default App;
