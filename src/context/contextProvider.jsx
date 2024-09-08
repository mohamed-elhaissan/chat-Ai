import run from "../config/geminApi";
import { createContext, useState } from "react";
export const ContextAPI = createContext();

const ContextProvider = (props) => {
  const [iaAnswer, setiaAnswer] = useState([]);
  const [inputfield, setInputfield] = useState("");


  const genrateAnswer = async () => {
    
    let respone = await run(inputfield);
    console.log(iaAnswer);
  };

  const contextImporting = {
    iaAnswer,
    genrateAnswer,
    setInputfield,
  };

  return (
    <ContextAPI.Provider value={contextImporting}>
      {props.children}
    </ContextAPI.Provider>
  );
};
export default ContextProvider;
