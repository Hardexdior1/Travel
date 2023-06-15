import React, { useRef, useState } from "react";
import "./Travel.css";

const TravelPage = ({
  img,
  countryName,
  nicePlaceToBe1,
  nicePlaceToBe2,
  nicePlaceToBe1Img1,
  nicePlaceToBe1Img2,
  nicePlaceToBe1Info,
  nicePlaceToBe2Info,
  countryInfo,
  id,
  price,
  removeCountry,
}) => {
  const [showNicePlaceToBe2, setShowNicePlaceToBe2] = useState(false);
  const [showNicePlaceToBe1, setShowNicePlaceToBe1] = useState(true);
  const [removeC, setRemoveC] = useState("");
  const [showAboutToDelete, setAboutToDelete] = useState(false);
  const [whereUserWantsToTravelTo, setWhereUserWantsToTravelTo] = useState("");
  const [showRegistration, setShowRegistration] = useState(false);
  const [userCodes, setUserCodes] = useState("");

  console.log(removeCountry);
  console.log(TravelPage);

  // form
  const [name, setName] = useState("");
  const [travelCode, setTravelCode] = useState("")
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  // registration message
  const [showSuccessfulMessage, setShowSuccessfulMessage] = useState(false);

  const[allCountryInfo,setAllCountryInfo]=useState(false);

  const submit = () => {
    if (
      email.length > 10 &&
      email.endsWith("@gmail.com") &&
      userCodes.toLocaleLowerCase() === travelCode.toLocaleLowerCase()
    ) {
      
      setShowSuccessfulMessage(true);
      setShowRegistration(false);
    } else if (name === "" || address === "" || email === "" || travelCode === "") {
      alert("please fill out the form");
    } else if (
      userCodes.toLocaleLowerCase() !== travelCode.toLocaleLowerCase()
    ) {
      alert('fill out the form and make sure the code  match with the provided one');
    } else {
      alert("invalid email");
    }

    
  };
  return (
    <div className="wrap">
      {/* <h1>{codesAndRandom}</h1> */}
      <h1>{removeC}</h1>
      {/* {dataReceived.map((eachDatum) => { */}
      <div>
        <div className="carrierFlex">
          <div className="flexSub">
            <div>
              <img src={img} alt={countryName} />
            </div>
            <div className="countryAndTextpad">
              <div className="countryNameFlex">
                <h4>CountryName: {countryName}</h4>
                <h4 className="price">travelCost: <b>${price}</b></h4>
              </div>

              <p className="showMoreLessBigDevice">
                {countryName} {countryInfo}
              </p>

             <div className="showMoreLess">
             {allCountryInfo? <p>{countryInfo} <button onClick={()=>{
                setAllCountryInfo(false)
              }}>see less  </button></p>:<p>{countryInfo.slice(0,330) +'...' } <button onClick={()=>{
                setAllCountryInfo(true)
              }}>see more  </button></p>}
             </div>
              
              <div className="btnCarrier">
                {showAboutToDelete ? (
                  <div>
                    <p>
                      <small className="small">
                        you are about to remove {countryName} from the available
                        countries you won't see it when you search for it again .. u really wanna delete it ?{" "}
                        <button
                          onClick={() => {
                            setAboutToDelete(false);
                          }}>
                          no
                        </button>{" "}
                        <button
                          onClick={() => {
                            removeCountry(id);
                            alert(
                              "you removed " +
                                countryName +
                                " we are trying our best to improve the list of available countries...travelex cares"
                            );
                            setRemoveC(
                              "you removed  " +
                                countryName +
                                " we are trying our best to improve the lists of countries available ...travelex cares"
                            );
                          }}>
                          yes
                        </button>{" "}
                      </small>
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <button
                  className="interestedBtn"
                  onClick={() => {
                    setAboutToDelete(false);
                    setWhereUserWantsToTravelTo(
                      "registration form to travel to " + countryName
                    );
                    setShowRegistration(true);
                    let codes = [
                      649 + "#advs",
                      655 + "#&rts",
                      986 + "#kh44f",
                      541 + "#ooje",
                      768 + "#@ty#",
                      442 + "#cdgty",
                      87 + "#btg",
                      984 + "#6tgh",
                      562 + "#kgt",
                      967 + "#wwd",
                      332 + "#22ed",
                      472 + "#220dd",
                      985 + "#ssd",
                      654 + "#40of",
                      511 + "#dyn",
                      6107 + "#ght",
                      877 + "#rvgt",
                    ];
                    let random = Math.floor(Math.random() * codes.length);
                    let codesAndRandom = codes[random]

                    setUserCodes(codesAndRandom + countryName);
                  }}>
                  interested
                </button>

                <button
                  className="notInterestedBtn"
                  onClick={() => {
                    setAboutToDelete(true);
                    setShowRegistration(false);
                  }}>
                  not interested
                </button>
              </div>
              <div>
                {showSuccessfulMessage ? (
                  <div>
                    <small className="successMessage">
                      dear <b>{name}</b> your registration to travel to{" "}
                      {countryName} was successful we'll contact you through
                      your email for further information
                      <button
                        onClick={() => {
                          setShowSuccessfulMessage(false);
                        }}>
                        ok
                      </button>
                    </small>
                  </div>
                ) : (
                  ""
                )}

                {showRegistration ? (
                  <div className="auto">
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        const userDetails = {
                          name: name,
                          travelCode: travelCode,
                          address: address,
                          email: email,
                        };

                        console.log(userDetails);
                      }}>
                      <h5>{whereUserWantsToTravelTo}</h5>
                      <h5>
                        your travel code is <b>{userCodes}</b>
                      </h5>

                      
                       
                        <div>
                        <label htmlFor="name">
                            <b>name: </b>
                          </label>
                        
                      
                          {" "}
                          <input
                            id="name"
                            onChange={(event) => {
                              setName(event.target.value);
                              console.log(event.target.value);
                            }}
                            type="text"
                          />
                        
                        </div>
                      

                     
                         <div>
                         {" "}
                          <label htmlFor="code">
                            <b>code:</b>
                          </label>
                       
                        
                          {" "}
                          <input
                            type="text"
                            name="code"
                            onChange={(event) => {
                              setTravelCode(event.target.value);
                            }}
                          />
                         </div>
                        
                     

                    <div>
                      
                        
                    <label htmlFor="address">
                            <b>your address:</b>
                          </label>
                        
                        
                          {" "}
                          <input
                            type="text"
                            name="address"
                            onChange={(event) => {
                              setAddress(event.target.value);
                            }}
                          />
                    </div>
                        
                     

                     
                         <div>
                         {" "}
                          <label htmlFor="emailAddress">
                            {/* <a href="https://gericht-restaurant-ashen.vercel.app" target="blank">gbebody e</a> */}
                            <b>email address:</b>
                          </label>

                          <input
                            type="text"
                            name="emailAddress"
                            onChange={(event) => {
                              setEmail(event.target.value);
                            }}
                          />
                         </div>
                      

                      <button
                        type="submit"
                        className="checkOutBtn"
                        onClick={() => {
                          submit();
                        }}>
                        checkout to {countryName}
                      </button>

                      <span>
                        <span className="notInterested">
                          no longer interested?{" "}
                        </span>
                        <button
                          onClick={() => {
                            setShowRegistration(false);
                          }}>
                          close registration
                        </button>
                      </span>
                    </form>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="flexSub1">
            <h5 className="h5">Top nice places to be in {countryName}</h5>

            <button
              onClick={() => {
                setShowNicePlaceToBe2(false);
                setShowNicePlaceToBe1(true);
              }}>
              {nicePlaceToBe1}
            </button>
            <button
              onClick={() => {
                setShowNicePlaceToBe1(false);
                setShowNicePlaceToBe2(true);
              }}>
              {nicePlaceToBe2}
            </button>

            {showNicePlaceToBe1 ? (
              <div>
                <img src={nicePlaceToBe1Img1} alt="" />
                {/* <h5>{nicePlaceToBe1}</h5> */}

                <p>
                  {nicePlaceToBe1} {nicePlaceToBe1Info}
                </p>
              </div>
            ) : (
              ""
            )}
            {showNicePlaceToBe2 ? (
              <div>
                <img src={nicePlaceToBe1Img2} alt="" />
                {/* <h5>{nicePlaceToBe2}</h5> */}

                <p>
                  {nicePlaceToBe2} {nicePlaceToBe2Info}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* {showRegistration ? (
        <div className="auto">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const userDetails = {
                name: name,
                travelCode: travelCode,
                address: address,
                email: email,
              };
              console.log(userDetails);
            }}>
            <h3>{whereUserWantsToTravelTo}</h3>
            <h5>
              your travel code is <b>{userCodes}</b>
            </h5>
            <span>
              no longer interested?{" "}
              <button
                onClick={() => {
                  setShowRegistration(false);
                }}>
                close registration
              </button>
            </span>
            <div>
              <label htmlFor="name">
                <b>name: </b>
              </label>
              <input
                id="name"
                onChange={(event) => {
                  setName(event.target.value);
                  console.log(event.target.value);
                }}
                type="text"
              />
            </div>

            <div>
              <label htmlFor="code">
                <b>code:</b>
              </label>
              <input
                type="text"
                name="code"
                onChange={(event) => {
                  setTravelCode(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="address">
                <b>your address:</b>
              </label>
              <input
                type="text"
                name="address"
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="emailAddress">
                <b>email address:</b>
              </label>
              <input
                type="text"
                name="emailAddress"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              onClick={() => {
                submit();
              }}>
              checkout to {countryName}
            </button>
          </form>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default TravelPage;
