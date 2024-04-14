// import React from "react";
import { CardGranja } from "../Molecules/CardGranja";
import Banner from "../Molecules/Banner";
function Granja() {
  return (
    <>
      <div className="grid grid-cols-1 justify-center items-center gap-x-4  max-sm:grid-cols-1 max-md:grid-cols-1">
        <Banner />
      </div>
      <div className="grid grid-cols-3 justify-center items-center gap-x-4  max-sm:grid-cols-1 max-md:grid-cols-2 content-center">
        <CardGranja />
        <CardGranja />
        <CardGranja />
        <CardGranja />
      </div>
    </>
  );
}

export default Granja;
