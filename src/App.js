import "./App.scss";

import Clones from "./Components/Clones";
import Header from "./Components/Header";
import Title from "./Components/Title";

function App() {
	return (
		<div className="App">
			<Header />
			<Title />
			<Clones />
		</div>
	);
}

export default App;
