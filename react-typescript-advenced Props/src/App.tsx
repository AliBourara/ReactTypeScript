import "./App.css";
import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Avengers" isLoggedIn={false} />
    </div>
  );
}

export default App;
