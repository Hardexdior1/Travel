import "./App.css";

import React, { useRef, useState } from "react";
import TravelPage from "./TravelProject/TravelPage";
import TravelData from "./TravelProject/TravelData";
import Hero from "./TravelProject/Hero";
import NoResultPage from "./TravelProject/NoResultPage";

function App() {
  // let rps = ["rock", "paper", "scissors"];
  // let randomeNuber1 = Math.floor(Math.random() * 3);
  //   let personal = rps[randomeNuber1];

  // console.log(codesAndRandom);
  const nav = useRef();

  const [dataReceived, setDataReceived] = useState(TravelData);
  const [totalExpenses, setTotalExpenses] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const removeCountry = (id) => {
    let newCountry = dataReceived.filter((country) => country.id !== id);
    setDataReceived(newCountry);
  };
  console.log(dataReceived);

  const menu = useRef();
  const [navBar, setNav] = useState(true);

  function toggle() {
    if (navBar == true) {
      menu.current.classList.remove("ul");
      menu.current.classList.add("ulShow");
    } else if (navBar !== true) {
      console.log("not true ");
      menu.current.classList.add("ul");
      menu.current.classList.remove("ulShow");
    }
  }
  // const navWrap = useRef();
  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 1000) {
  //     navWrap.current.classList.add("navW");
  //   } else {
  //     navWrap.current.classList.remove("navW");
  //   }
  // });
  const[area,setArea]=useState('')
  return (
    <div className="App">
      {/* <nav className="nav" ref={nav}>
        <h1 className="h1">Travelex </h1>

        <input
          className="input"
          type="text"
          placeholder="search country"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </nav> */}
      <div className="navWrap" >
        <nav className="navbar">
          <h1 className="h1">Travelex</h1>
          <u className="ul" ref={menu}>
          <li><a href="#">Home</a></li>

            <li><a href="#">About</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Feature</a></li>
          </u>
          <div
            className="menu"
            onClick={() => {
              toggle();
              setNav(!navBar);
            }}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </div>
      
      <section className="heroWrap">
        <div className="background">
          <h1>
            Explore the world and travel to the country of your choice in easy and simple
            way with the help of <i>Travelex </i>...
          </h1>
        </div>
      </section>
      {/* <section className="search-carrier">
      <input
          className="input"
          type="text"
          placeholder="search country"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </section> */}
      <nav className="nav" ref={nav}>
        <h1 className="h1">Travelex </h1>

        <input
          className="input"
          type="text"
          placeholder="search country"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </nav>
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
          }
        })
        .map((dataReceived) => {
          return (
       
           <div>
     
             <TravelPage
              key={dataReceived.id}
              {...dataReceived}
              removeCountry={removeCountry}
            />
           </div>
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
