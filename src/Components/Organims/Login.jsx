import { usePost } from "../../../public/hooks/usePost";
import { Form } from "../Molecules/Form";

export const Login = () => {
  return (
    <div className=" h-screen w-full flex-1 flex">
      <div className="w-full lg:w-9/12 flex justify-center items-center">
        <Form />
      </div>

      <div className="hidden relative lg:flex w-2/5 h-full items-center justify-center text-white bg-[#03A460] py-36 px-12">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl text-center font-bold mb-2">
            Hello, friend!
          </h2>
          <div className=" border-2 w-10 inline-block border-white mb-2 "></div>
          <p className="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            quos.
          </p>
          <button className="border-2 border-[#FFCB47] hover:bg-[#065f3a] rounded-md px-12 py-2">
            Sing up
          </button>
        </div>
      </div>
    </div>
  );
};
