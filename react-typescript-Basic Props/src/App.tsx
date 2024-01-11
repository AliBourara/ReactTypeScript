import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Peter",
    last: "Parker",
  };
  const nameList = [
    {
      first: "Peter",
      last: "Parker",
    },
    {
      first: "Tony",
      last: "Stark",
    },
    {
      first: "Steve",
      last: "Roger",
    },
  ];
  return (
    <div className="App">
      <Greet name="Avengers" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
