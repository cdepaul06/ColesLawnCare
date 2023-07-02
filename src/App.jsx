import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  return (
    <BrowserRouter>
      <div className='sticky top-0 z-50'>
        <Navigation />
      </div>
      <ImageCarousel />
    </BrowserRouter>
  );
}

export default App;
