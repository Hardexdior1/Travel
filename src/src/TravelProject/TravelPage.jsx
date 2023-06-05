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
  codesAndRandom,
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
                <h4>travelCost: ${price}</h4>
              </div>

              <p>
                {countryName} {countryInfo}
              </p>
              <div className="btnCarrier">
                {showAboutToDelete ? (
                  <div>
                    <p>
                      <small className="small">
                        you are about to remove {countryName} from the available
                        countries .. u really wanna delete it ?{" "}
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
                      655 + "&rts",
                      986 + "#**44f",
                      541 + "ooje",
                      768 + "j@ty#",
                      442 + "bcdgty",
                      87 + "nbtg",
                      984 + "6tgh",
                      562 + "kgtyf",
                    ];
                    let random = Math.floor(Math.random() * codes.length);
                    let codesAndRandom = codes[random];

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
            </div>
          </div>

          <div className="flexSub1">
            {/* <h4>Top nice places to be in {countryName}</h4> */}

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

      {showRegistration ? (
        <form>
          <h2>{whereUserWantsToTravelTo}</h2>
          <h5>your travel code is <b>{userCodes}</b></h5>
          <span>
            no longer interested?{" "}
            <button
              onClick={() => {
                setShowRegistration(false);
              }}>
              close registration
            </button>
          </span>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default TravelPage;
