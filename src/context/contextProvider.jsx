import run from "../config/geminApi";
import {  createContext, useState } from "react";
export const ContextAPI = createContext();


const ContextProvider = (props) => {
  
const [iaAnswers, setiaAnswer] = useState([]);
const [inputfield,setInputfield] = useState('')
const [humanQuestion, setHumanQuestion] = useState([]);
const [previosFiled, setPreviosField] = useState([]);
const  genrateAnswer = async ()=>{
  setHumanQuestion([...humanQuestion,inputfield])
 

  let respone = await run(inputfield)


  let previesanswore = iaAnswers
  setiaAnswer([...previesanswore,respone]);
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