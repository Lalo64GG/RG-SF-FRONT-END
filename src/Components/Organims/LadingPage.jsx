import React from 'react';
import { Paragraph } from '../Atoms/Paragraph';
import { Feature } from '../Molecules/Feature'; 
import {  FaRegGrinBeam, FaRegSmile, FaRegSadTear } from 'react-icons/fa';
import { MdOutlineVaccines } from 'react-icons/md';
import { Link, useNavigate } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-700" >Monitoreo de Pollitos</h1>
      <Paragraph>
        Una aplicación de monitoreo para garantizar el bienestar de tus pollitos. Mantén un control completo sobre el ambiente y las condiciones de vida de tus pollitos con nuestras funciones avanzadas.
      </Paragraph>
      
      <div className="mt-12">
        <Feature
          title="Monitoreo de Agua"
          description="La aplicación mide el nivel de agua en el bebedero de tus pollitos y te alerta si el nivel es insuficiente. Nunca más te preocupes por la falta de agua para tus pollitos."
          icon={<FaRegGrinBeam />}
        />
        <Feature
          title="Monitoreo de Comida"
          description="Mide el nivel de comida en el alimentador de tus pollitos y te notifica si el nivel de comida es bajo. Mantén a tus pollitos bien alimentados en todo momento."
          icon={<FaRegGrinBeam />}
        />
        <Feature
          title="Monitoreo de Temperatura"
          description="Registra la temperatura dentro del recinto para asegurar condiciones óptimas para tus pollitos. Recibirás alertas si la temperatura está fuera de los rangos seguros."
          icon={<FaRegGrinBeam />}
        />
        <Feature
          title="Monitoreo de Humedad"
          description="Controla la humedad ambiente para mantener un entorno saludable para tus pollitos. La humedad adecuada es esencial para su salud y bienestar."
          icon={<FaRegSmile />}
        />
        <Feature
          title="Sistema de Alertas Inteligentes"
          description="Nuestro sistema de alertas te notifica instantáneamente sobre cualquier problema detectado en el ambiente de tus pollitos. Estarás siempre al tanto y podrás tomar acciones rápidas."
          icon={<FaRegSadTear />}
        />
        <Feature
          title="Registro de Datos Históricos"
          description="Accede al registro detallado de datos históricos para analizar el comportamiento y las condiciones de vida de tus pollitos a lo largo del tiempo. Toma decisiones informadas para su cuidado."
          icon={<MdOutlineVaccines />}
        />
      </div>

      <div className="mt-12">
        <Link to={'/'}>
        <button className='bg-[#03A460] rounded-md p-2 shadow-md hover:bg-[#195d41] text-white'>¡Empieza Ahora!</button>
        </Link>
       
      </div>

      <div className="mt-16 bg-custom-yellow p-8 rounded-lg">
        <h1>Integrantes del Equipo</h1>
        <Paragraph>
          Nuestro equipo es pequeño, pero no por ello somo malos, nuestro equipo se conforma por 3 Ingenieros en Softwares de la universidad Politécnica de Chiapas, nuestro equipo se conforma de un Front-end, Backend y un FullStack
        </Paragraph>
        <button className=' bg-[#FFCB47] p-2 rounded-md shadow-md hover:bg-[#ae8726] text-white'>Contactar</button>
      </div>
    </div>
  );
};

export default LandingPage;
