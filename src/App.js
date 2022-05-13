import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Mentor from "./Components/Mentor/Mentor";
import Questions from "./Components/Questions/Questions";
import Schedule from "./Components/Schedule/Schedule.js";
import Stakeholders from "./Components/Stakeholders/Stakeholders";
import Button from "./Components/Forms/Button/Button.js";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <div>
      <Home />
      <Banner />
      <Schedule />
      <Stakeholders />
      <Mentor />
      <Questions />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
