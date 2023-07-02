import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div>
        <h1>This is a mother fucking template!</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
