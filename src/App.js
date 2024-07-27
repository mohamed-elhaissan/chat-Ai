import "./App.css";
import Main from "./componanats/navbar";
import Hero from "./componanats/hero";
import imageLogo from "./logo.svg";
function App() {
  return (
    <div>
      <Main />
      <Hero />
      <img src={imageLogo} alt="" className="logo" />
    </div>
  );
}

export default App;
