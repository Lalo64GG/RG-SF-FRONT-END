import {
  MdWbSunny,
  MdOpacity,
  MdRestaurantMenu,
  MdLocalDrink,
} from "react-icons/md";

export const Card = ({ name, temperatura, humedad, comida, agua  }) => {
  return (
    <div className="bg-white rounded-md shadow-md my-5">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWl_Jj8mn86wIMP4Qr3zEOOsfZL30oNsLry7PSyptYg&s"
        className="rounded-t-md w-full"
        alt="Encierro"
      />
      <div className="p-4">
        <h2 className="text-center font-bold text-2xl text-[#03A460]">
          {name}
        </h2>
        <div className="flex flex-col grid-cols-3 gap-4 mt-4">
          <div className="flex items-center">
            <MdWbSunny className="text-[#FFA500] w-6 h-6 mr-2" />
            <p className="text-gray-700 font-bold">Temperatura:</p>
            <span className="text-gray-900 ml-1">{temperatura}</span>
          </div>
          <div className="flex items-center">
            <MdOpacity className="text-[#87CEEB] w-6 h-6 mr-2" />
            <p className="text-gray-700 font-bold">Humedad:</p>
            <span className="text-gray-900 ml-1">{humedad}</span>
          </div>
          <div className="flex items-center">
            <MdRestaurantMenu className="text-[#FF6347] w-6 h-6 mr-2" />
            <p className="text-gray-700 font-bold">Comida:</p>
            <span className="text-gray-900 ml-1">{comida}</span>
          </div>
          <div className="flex items-center">
            <MdLocalDrink className="text-[#4169E1] w-6 h-6 mr-2" />
            <p className="text-gray-700 font-bold">Agua:</p>
            <span className="text-gray-900 ml-1">{agua}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
