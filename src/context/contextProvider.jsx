import run from "../config/geminApi";
import { createContext, useState } from "react";
export const ContextAPI = createContext();

const ContextProvider = (props) => {
  const [iaAnswer, setiaAnswer] = useState([]);
  const [inputfield, setInputfield] = useState("");


  const genrateAnswer = async () => {
    let newIaAnswer = []
    newIaAnswer.push(inputfield)
    let respone = await run(inputfield);
    newIaAnswer.push(respone);
    setiaAnswer([iaAnswer,...newIaAnswer]);
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
