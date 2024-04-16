import { MdOutlineVaccines } from "react-icons/md";
import { CiMenuFries, CiLogout } from "react-icons/ci";

export const Card = ({ encierro }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{encierro.name}</h2>
        <span className="text-gray-500">
          {encierro.temperature}°C <MdOutlineVaccines />
        </span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500">
          Humedad: {encierro.humidity}% <CiMenuFries />
        </span>
        <span className="text-gray-500">
          Comida: {encierro.food} <CiMenuFries />
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-500">
          Agua: {encierro.water} <CiMenuFries />
        </span>
        <button className="text-red-500 hover:text-red-700">
          <CiLogout />
        </button>
      </div>
    </div>
  );
};

