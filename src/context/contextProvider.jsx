import run from "../config/geminApi";
import { createContext, useState } from "react";
export const ContextAPI = createContext();

const ContextProvider = (props) => {
  const [iaAnswer, setiaAnswer] = useState([]);

  const genrateAnswer = async (inputvalue) => {
    try {
      let newAnswer = [...iaAnswer,inputvalue];
      let respone = await run(inputvalue);
      
      setiaAnswer([...newAnswer]);

      setiaAnswer([...newAnswer]);
      console.log(iaAnswer);
    } catch (err) {
      console.log(err);
    }
  };

  const contextImporting = {
    iaAnswer,
    genrateAnswer,
    
  };

  return (
    <ContextAPI.Provider value={contextImporting}>
      {props.children}
    </ContextAPI.Provider>
  );
};
export default ContextProvider;
