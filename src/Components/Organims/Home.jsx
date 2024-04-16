import { Carousel } from "../Molecules/Carrusel";
import { Card } from "../Molecules/Card";
import { useGet } from "../../../public/hooks/useGet";
import { LoadingSpinner } from "../LoaderSpinner";

export const Home = () => {
  const { data } = useGet("http://44.216.227.91:4000/enclosure");

  return (
    <>
      <div className="mt-10">
        <Carousel />
      </div>
      <div className=" flex justify-center items-center mt-20 ">
        <div className="grid grid-cols-4 justify-center items-center gap-x-4  max-sm:grid-cols-1 ">
          {data ? (
            data.data.map((encierro) => (
              <Card key={encierro.id} encierro={encierro} name={encierro.name} />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </>
  );
};
