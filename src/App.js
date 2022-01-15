import React, { useEffect, useReducer } from "react";
import axios from "axios";

import {
  occupationDataReducer,
  initialState,
} from "./reducers/occupationReducer";

import OccupationContext from "./context/occupationContext";

import Summary from "./components/summary/Summary";
import DataChart from "./components/chart/DataChart"

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(occupationDataReducer, initialState);
  const { loading, data } = state;

  useEffect(() => {
    dispatch({ type: "CALL_API" });

    const getData = async () => {
      const response = await axios.get(
        "https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32"
      );

      if (response.status === 200) {
        dispatch({ type: "SUCCESS", data: response.data });
        return;
      }

      dispatch({ type: "ERROR", error: response.error });
    };

    getData();
  }, []);

  // console.log(data);
  const providerState = {
    state,
    dispatch,
  };

  return (
    <OccupationContext.Provider value={providerState}>
      <div className="App">
        <h1>Occupation Overview</h1>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>
              {data.occupation.title} in {data.region.title}
            </p>
            <Summary />
            <DataChart />
          </>
        )}
      </div>
    </OccupationContext.Provider>
  );
}

export default App;
