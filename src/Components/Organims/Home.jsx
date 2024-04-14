
import { Carousel } from "../Molecules/Carrusel";
import { Card } from "../Molecules/Card";

export const Home = () => {
  return (
    <>
      <div className="mt-10">
        <Carousel />
      </div>
      <div className=" flex justify-center items-center mt-20 ">
      <div className="grid grid-cols-4 justify-center items-center gap-x-4  max-sm:grid-cols-1 ">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      </div>
    </>
  );
};
