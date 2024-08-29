import {  createContext, useState } from "react";

export const context = createContext();

const [iaAnswers, setiaAnswer] = useState([]);
const [humanQuestion, setHumanQuestion] = useState([]);
const [previosFiled, setPreviosField] = useState([]);



const contextImporting = {
  iaAnswers,
  setiaAnswer,
  humanQuestion,
  setHumanQuestion,
  previosFiled,
  setPreviosField,  
};
const ContextProvider = (props) => {
  return (
    <context.Provider value={contextImporting}>
        {props.Children}
        </context.Provider>
  );
};
export default ContextProvider; 