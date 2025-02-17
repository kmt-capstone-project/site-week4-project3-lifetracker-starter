import * as React from "react";
import { Link } from "react-router-dom";
import "./NutritionPage.css";
import { useEffect, useState } from "react";

export default function NutritionPage({ appState, setAppState }) {
  const [nutriForm, setNutriform] = useState(false);

  const handleNutrition = (event) => {
    event.preventDefault();
    setNutriform(true);
  };

  return (
    <>
      {appState.isAuthenticated ? (
        <>
          <div className="NutritionPage css-1bpnzr3">
            <div className="css-1ef7k5z">
              <div className="chakra-stack css-1cgbrw5">
                <h2 className="chakra-heading css-b5coes">Nutrition</h2>
              </div>
            </div>
            <div className="css-vpbd2d">
              <div className="css-1qfrez2">
                <div className="css-uiodal">
                  <div className="nutrition-feed">
                    <div className="css-0">
                      <Link
                        to="/nutrition/create"
                        className="chakra-link button css-spn4bz"
                      >
                        <button
                          //onClick = {handleNutrition}
                          type="button"
                          className="chakra-button css-ez23ye"
                        >
                          Record Nutrition
                        </button>
                      </Link>

                      {appState.nutrition.length === 0 ? (
                        <div className="css-j7qwjs">
                          <h2 className="chakra-heading css-hzsul0">
                            Nothing here yet.
                          </h2>

                          <img
                            src="src/assets/empty-fridge.jpg"
                            className="chakra-image css-ni3ua3"
                          />
                        </div>
                      ) : (
                        appState.nutrition.map((info) => {
                          // console.log("info: ", info)
                          return <div> {info.name} </div>;
                        })
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h2 className="chakra-heading css-1dklj6k">Log in to see your data.</h2>
      )}
    </>
  );
}
