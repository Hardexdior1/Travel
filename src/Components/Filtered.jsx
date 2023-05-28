import React from "react";

const Filtered = ({ whatNeeded }) => {
  console.log(whatNeeded);
  return (
    <div>
      <h1>hello</h1>
      {whatNeeded.map((needs) => {
        const { age, name, occupation, id } = needs;
        return (
          <>
            <div key={id}>
            
              <h3>{name}</h3>
              <h4>{occupation}</h4>
              <h5>{age}</h5>
            </div>
            <button
              onClick={(needs) => {
                //  console.log(whatNeeded);
              }}>
              click
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Filtered;
