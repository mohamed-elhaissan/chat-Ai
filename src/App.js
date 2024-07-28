import "./App.css";
import Main from "./componanats/navbar";
import Hero from "./componanats/hero";
import Section from "./componanats/gemini"
import imageLogo from "./logo.svg";
import Middle from "./componanats/middle";
import Search from "./componanats/search"
function App() {
  return (
    <div>
      <Main />
      <Hero />
      <img src={imageLogo} alt="" className="logo" />
      <Section/>
    <Middle/>
    <Search/>
    </div>
  );
}

export default App;
