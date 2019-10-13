import React from "react";
import { BarLoader } from "react-spinners";

const BLoader = () => (
  <div className="spinner">
    <BarLoader
      color={`var(--$color-secondary-light-2)`}
      height={"5px"}
      width={"100px"}
    />
  </div>
);

export default BLoader;
