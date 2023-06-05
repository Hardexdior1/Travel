import React, { useRef, useState } from "react";
import "./question.css";



const Question = ({ theQuestion }) => {
  const [seeAnswer, setSeeAnswer] = useState(false);
  const show=useRef();



 function click(){
    if (show.current.classList.contains('showHello')){
        show.current.classList.remove('showHello');
        show.current.classList.add('showIt');
    }
 }


  return (
    <div>
        
      {theQuestion.map((Question) => {
        const { question, answer, id } = Question;
        return (
          <div key={id} className="carrier">
            <div className="question">
              {" "}
              <h4>{question}</h4>
              <button
                className="btn"
                onClick={() => {
                  setSeeAnswer(!seeAnswer);
                }}>
                {seeAnswer ? "-" : "+"}
              </button>
            </div>
            {seeAnswer && <p>{answer}</p>}
          </div>
        );
      })}
      <div>
         <h1 className="showHello" ref={show}>hello world</h1>
        <button className="btn" onClick={()=>{
            click();

        }}>show it</button>
      </div>
      <h2>question</h2>
    </div>
  );
};

export default Question;
