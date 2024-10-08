import { useEffect, useState } from "react";
import "./App.css";
import Header from "./componants/header.jsx";
import Search from "./componants/search.jsx";
import SectionBot from "./componants/SectionBot.jsx";
import Loading from "./componants/loading/loading.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="h-full w-full">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Search />
          <SectionBot  />
        </>
      )}
    </div>
  );
}

export default App;
