import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Mentor from "./Components/Mentor/Mentor";
import Questions from "./Components/Questions/Questions";
import Schedule from "./Components/Schedule/Schedule.js";
import Stakeholders from "./Components/Stakeholders/Stakeholders";

function App() {
  return (
    <div>
      <Home />
      <Schedule />
      <Stakeholders />
      <Mentor />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
