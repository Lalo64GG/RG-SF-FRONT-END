import { RegisterForm } from "../Molecules/RegisterForm"

export const Register = () => {
  return (
    <div className=' h-screen w-screen flex'>
    <div className='w-1/2 flex justify-center items-center'>
        <RegisterForm/>
    </div>

    <div className='w-1/2'>
        <div className=" bg-gray-500">

        </div>
    </div>
</div>
  )
}
