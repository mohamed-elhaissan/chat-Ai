import run from "../config/geminApi";
import { createContext, useState } from "react";
export const ContextAPI = createContext();

const ContextProvider = (props) => {
  const [answerDisplay, setiaAnswer] = useState([]);
  const [inputfield, setInputfield] = useState("");
  const [humanQuestion, setHumanQuestion] = useState([]);
  const [loading,setLoading] = useState(false)
  let newarr = []
  const genrateAnswer = async () => {
    setLoading(true)
    newarr.push(inputfield)
    let respone = await run(inputfield);
    newarr.push(respone)

    setiaAnswer([answerDisplay,...newarr]);
    setLoading(false)
  };

  const contextImporting = {
    answerDisplay,
    humanQuestion,
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
