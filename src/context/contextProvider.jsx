import run from "../config/geminApi";
import {  createContext, useState } from "react";
export const ContextAPI = createContext();


const ContextProvider = (props) => {
  
const [iaAnswers, setiaAnswer] = useState([]);
const [inputfield,setInputfield] = useState('')
const [humanQuestion, setHumanQuestion] = useState([]);
const [previosFiled, setPreviosField] = useState([]);
const  genrateAnswer = async ()=>{
  await run(inputfield)
}

const contextImporting = {
  iaAnswers,
  setiaAnswer,
  humanQuestion,
  setHumanQuestion,
  previosFiled,
  setPreviosField,  
  genrateAnswer,
  inputfield,
  setInputfield
};


  return (
    <ContextAPI.Provider value={contextImporting}>
        {props.children}
        </ContextAPI.Provider>
  );
};
export default ContextProvider; 