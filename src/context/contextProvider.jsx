import run from "../config/geminApi";
import { createContext, useState } from "react";
export const ContextAPI = createContext();

const ContextProvider = (props) => {
  const [answerDisplay, setiaAnswer] = useState([]);
  const [inputfield, setInputfield] = useState("");
  const [humanQuestion, setHumanQuestion] = useState([]);
  const [loading,setLoading] = useState(false)
  const genrateAnswer = async () => {
    setLoading(true)
    setHumanQuestion([...humanQuestion, inputfield]);

    let respone = await run(inputfield);

    let previesanswore = answerDisplay;
    setiaAnswer([...previesanswore, respone]);
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
