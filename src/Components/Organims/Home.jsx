import React, { useEffect } from "react";
import { Carousel } from "../Molecules/Carrusel";
import { Card } from "../Molecules/Card";
import { useGet } from "../../../public/hooks/useGet";
import { LoadingSpinner } from "../LoaderSpinner";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { Modal } from "../Molecules/Modal";
import io from "socket.io-client";

const serverURL = "http://34.200.180.243:4200/";

export const Home = () => {
  const [view, setView] = useState(false);
  const [message, setMessage] = useState();
  const [water, setWater] = useState();

  const { data } = useGet("http://44.216.227.91:4000/enclosure");

  useEffect(() => {
    const socket = io(serverURL, {
      auth: {
        token: localStorage.getItem("token"),
      },
    });

    socket.on("connect", () => {
      console.log("Conectado al servidor de Socket.IO");
    });

    socket.on("enviar_data", (data) => {
      console.log("Datos recibidos del servidor:", data);
      setMessage(data);
      
    });

    // Limpieza: cerrar la conexión del socket cuando se desmonte el componente
    return () => {
      socket.disconnect();
    };
  }, []); // Ejecutar solo una vez al montar el componente

  const handlePressView = () => {
    setView(true);
    console.log(view);
  };
  return (
    <>
      <div className="mt-10">
        <Carousel />
      </div>
      <div className="flex justify-center items-center mt-20">
        <div className="grid grid-cols-4 justify-center items-center gap-x-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3">
          {data && message ? (
            data.data.map((encierro) => (
              <Card
                key={encierro.id}
                encierro={encierro}
                name={encierro.name}
                comida={message.food}
                temperatura={message.temperature}
                humedad={message.humidity}
                agua={message.water}
              />
            ))
          ) : (
            <LoadingSpinner />
          )}
          <div className="relative">
            <button
              className="absolute -top-3 justify-center items-center left-0 bg-blue-500 text-white rounded-full p-2"
              onClick={handlePressView}
            >
              <MdAdd className="w-6 h-6" />
            </button>
          </div>
        </div>
        {view && <Modal isOpen={view} setShow={setView} />}
      </div>
    </>
  );
};
