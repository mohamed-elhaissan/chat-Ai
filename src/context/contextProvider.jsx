import run from "../config/geminApi";
import { createContext, useState } from "react";
export const ContextAPI = createContext();

const ContextProvider = (props) => {
  const [iaAnswer, setiaAnswer] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentRespone, setcurrentRespone] = useState([]);
  let newAnswer = []
  const genrateAnswer = async () => {
    console.log(iaAnswer)
    console.log(iaAnswer);
    

    try {
      const respone = await run(inputValue);
      setiaAnswer([...iaAnswer,inputValue,respone])
      
    } catch (err) {
      console.log(err);
    }
  };

  const contextImporting = {
    iaAnswer,
    genrateAnswer,
    setInputValue,
  };

  return (
    <ContextAPI.Provider value={contextImporting}>
      {props.children}
    </ContextAPI.Provider>
  );
};
export default ContextProvider;
