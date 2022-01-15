import React, { useEffect, useReducer } from "react";
import axios from "axios";

import {
  occupationDataReducer,
  initialState,
} from "./reducers/occupationReducer";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(occupationDataReducer, initialState);
  // const { data, loading, error } = state;

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

  return (
    <div className="App">
      <h1>APP Component</h1>
    </div>
  );
}

export default App;
