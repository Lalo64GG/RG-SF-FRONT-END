// import React from "react";

import { useGet } from "../../../public/hooks/useGet";
import Banner from "../Molecules/Banner";
import { LoadingSpinner } from "../LoaderSpinner";
import { CardVeterinary } from "../Molecules/CardVeterinary";
function Granja() {
  const { data } = useGet("http://44.216.227.91:4000/enclosure");

  return (
    <>
      <div className="grid justify-center items-center gap-x-4 mt-10  ">
        <Banner />
      </div>
      <div className="flex justify-center items-center mt-20">
        <div className="grid grid-cols-4 justify-center items-center gap-x-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3">
          {data ? data.data.map((encierro) => <CardVeterinary name={encierro.name} id={encierro.id}  />) : <LoadingSpinner />}
        </div>
      </div>
    </>
  );
}

export default Granja;
