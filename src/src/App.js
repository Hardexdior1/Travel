import "./App.css";

import React, { useRef, useState } from "react";
import TravelPage from "./TravelProject/TravelPage";
import TravelData from "./TravelProject/TravelData";
import Hero from "./TravelProject/Hero";

function App() {
  // let rps = ["rock", "paper", "scissors"];
  // let randomeNuber1 = Math.floor(Math.random() * 3);
  //   let personal = rps[randomeNuber1];

  

  // console.log(codesAndRandom);
  const nav = useRef();
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      nav.current.classList.remove("nav");
      nav.current.classList.add("navFixed");
    } else {
      nav.current.classList.add("nav");
      nav.current.classList.remove("navFixed");
    }
  });
  const [dataReceived, setDataReceived] = useState(TravelData);
  const [totalExpenses, setTotalExpenses] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const removeCountry = (id) => {
    let newCountry = dataReceived.filter((country) => country.id !== id);
    setDataReceived(newCountry);
  };
  console.log(dataReceived);

  return (
    <div className="App">
      <nav className="nav" ref={nav}>
        <h1 className="h1">Travelex</h1>

        <input
          className="input"
          type="text"
          placeholder="search country"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </nav>
      <h1>{dataReceived.length}</h1>
      <div className="countriesLengthDiv">
        {dataReceived.length < 1 ? (
          <div>
            <small>
              you have no place to travel to, click the{" "}
              <button
                onClick={() => {
                  setDataReceived(TravelData);
                }}>
                refresh
              </button>{" "}
              button to restore countries, else you are going no where
            </small>
          </div>
        ) : (
          ""
        )}
      </div>
      {dataReceived
        .filter((dataReceived) => {
          if (searchTerm == "") {
            return dataReceived;
          } else if (
            dataReceived.countryName
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return dataReceived;
          } else {
            console.log("no result");
          }
        })
        .map((dataReceived) => {
          return (
            <TravelPage
              key={dataReceived.id}
              {...dataReceived}
              removeCountry={removeCountry}
            />
          );
        })}
      {/* {dataReceived.map((dataReceived) => {
        return (
          <TravelPage
            key={dataReceived.id}
            {...dataReceived}
            removeCountry={removeCountry}
            search={search}
          />
        );
      })} */}
      <Hero />
    </div>
  );
}

export default App;
