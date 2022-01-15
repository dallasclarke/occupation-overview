import React, { createContext, useContext } from "react";

const OccupationContext = createContext();

export const useOccupationContext = () => {
  return useContext(OccupationContext);
}

export default OccupationContext;
