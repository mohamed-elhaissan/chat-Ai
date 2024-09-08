import run from "../config/geminApi";
import { createContext, useState } from "react";
export const ContextAPI = createContext();

const ContextProvider = (props) => {
  const [iaAnswer, setiaAnswer] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentRespone, setcurrentRespone] = useState([]);

  const genrateAnswer = async () => {
    setiaAnswer([...iaAnswer,inputValue])
    console.log(iaAnswer);

    try {
      const respone = await run(inputValue);
      setcurrentRespone(respone);
      console.log(iaAnswer);
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
