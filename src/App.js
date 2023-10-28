import "./App.css";
import Glass from "./Glass/Glass";
import Title from "./Title/Title";
// import GlassState from './GlassState/GlassState';

function App() {
  return (
    <div>
      <div className="background">
        <div className="overlay">
          <Title />
          <Glass />
        </div>
      </div>
      {/* <GlassState />       */}
    </div>
  );
}

export default App;
