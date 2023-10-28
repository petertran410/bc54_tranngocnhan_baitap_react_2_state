import "./App.css";
import Glass from "./Glass/Glass";
import Title from "./Title/Title";

function App() {
  return (
    <div>
      <div className="background">
        <div className="overlay">
          <Title />
          <Glass />
        </div>
      </div>
    </div>
  );
}

export default App;
