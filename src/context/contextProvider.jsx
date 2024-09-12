import run from "../config/geminApi";
import { createContext, useState } from "react";
export const ContextAPI = createContext();

const ContextProvider = (props) => {
  const [iaAnswer, setiaAnswer] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const genrateAnswer = async () => {

    setiaAnswer([...iaAnswer, inputValue]);
    try {
      const respone = await run(inputValue);
      
      let myword = respone.split('**')    
      myword.map((item,index)=>{
        index % 2 == 0 ? '<h2>item</h2>' : item
      })  
      
      setiaAnswer([...iaAnswer, inputValue, myword]);
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
