import { useState } from "react";
import { Input } from "../Atoms/Input";
import { Label } from "../Atoms/Label";
import { usePost } from "../../../public/hooks/usePost";
import { Alert } from "../Alert";

export const Modal = ({ isOpen, setShow }) => {
  const [name, setName] = useState();
  const [food, setFood] = useState();
  const [vaccine, setVaccine] = useState();

  const userId = parseInt(localStorage.getItem("id"))

  const encierroObject = {
    name,
    typeOfFood: food,
    vaccine,
    userId,
  };

  const handlePressClose = () => {
    setShow(false);
    window.location.reload();
  };

  const { handleSubmit, error, success, mssge } = usePost(
    "http://44.216.227.91:4000/enclosure",
    encierroObject
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      {(success || error) && (
        <Alert color1={"bg-green-800"} color2={"bg-green-500"} children={mssge} />
      )}

      <form className="bg-white rounded-lg p-6 shadow-md w-96  ">
        <h1 className="text-center text-2xl font-bold uppercase mb-5">
          Crear encierro
        </h1>
        <div className="mb-5">
          <Label children={"Encierro"} style={"block"} />
          <Input
            type={"text"}
            placeholder={"Ingresa el nombre del encierro"}
            style={
              "shadow-md rounded-md outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent "
            }
            setState={setName}
          />
        </div>

        <div className="mb-5">
          <Label children={"Ingrese el tipo de alimento"} style={"block"} />
          <Input
            type={"text"}
            placeholder={"Ingresa el tipo de alimento"}
            style={
              "shadow-md rounded-md outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent "
            }
            setState={setFood}
          />
        </div>

        <div className="mb-5">
          <Label children={"Vacuna"} style={"block"} />
          <Input
            type={"text"}
            placeholder={"Ingresa la ultima vacuna aplicada"}
            style={
              "shadow-md rounded-md outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent "
            }
            setState={setVaccine}
          />
        </div>

        <div className="flex justify-center items-center gap-x-4 mt-10">
          <button
            className="px-4 py-2 rounded-md shadow-lg bg-slate-400 transition-colors hover:bg-slate-500 text-white"
            onClick={handlePressClose}
          >
            Cerrar
          </button>
          <button
            className="px-4 py-2 rounded-md shadow-lg bg-green-400 transition-colors hover:bg-green-600 text-white"
            onClick={handleSubmit}
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
