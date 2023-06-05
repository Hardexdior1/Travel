import React from "react";
import Filtered from "./Filtered";

const Component = ({ received }) => {
  const received2 = received;
//   console.log(received2);
const whatReceived=received2.filter((theAge)=>theAge.age>19)
console.log(whatReceived);
  
  return (
    <div>
      <div>
        {received.map((all) => {
          const { name, age, id, occupation } = all;

          return (
            <div key={id}>
              <h4> name: {name}</h4>
              <p> age: {age}</p>
              <h5>occupation: {occupation + " oluwadamilare"}</h5>
            </div>
          );
        })}
      </div>
      <Filtered whatNeeded={whatReceived}/>
    </div>
  );
};

export default Component;
