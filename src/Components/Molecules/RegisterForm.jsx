import { Label } from "../Atoms/Label"
import { Input } from "../Atoms/Input"

export const RegisterForm = () => {
  return (
    <form className='bg-[#03A460] px-6 rounded-md shadow-lg py-4'>
    <h1 className=' text-black text-center text-2xl font-bold mb-5 mt-2 '>
        Inicio de Sesion
    </h1>
    <div className='mb-5'>
        <Label children={ "Ingresa tú correo" }/>
        <Input type={"email"} placeholder={"Ingresa tu email"}/>
    </div>

    <div className='mb-5'>
        <Label children={"Ingresa tú contraseña"}/>
        <Input type={"password"} placeholder={"Ingres tu contraseña"}/>
    </div>

    <div className='mb-5'>
        <Label children={"Confirma tú contraseña"}/>
        <Input type={"password"} placeholder={"Ingres tu contraseña"}/>
    </div>


    <div className='flex justify-center items-center mb-5 gap-x-4 p-10'>
       <button className='bg-[#FFCB47] px-4 py-2 rounded-md shadow-md hover:bg-[#b99335] hover:cursor-pointer '>
            Iniciar Sesion
       </button>
    </div>
</form>
  )
}
