import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AllResultPage from "./pages/AllResultPage";
import DeveloperPage from "./pages/DeveloperPage";

function App() {
	return (
		<Switch>
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
		</Switch>
	);
}

export default App;
