export const CardGranja = () => {
  return (
    <div className="flex justify-center">
    <div className=" bg-white flex flex-col justify-center items-center w-72 rounded-md shadow-md my-6 content-center">
      <div className="w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWl_Jj8mn86wIMP4Qr3zEOOsfZL30oNsLry7PSyptYg&s"
          className=" rounded-t-md w-full"
        />
      </div>
      <div>
        <h2 className=" text-center font-bold text-2xl text-[#03A460]">
          Granja 1
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          nesciunt blanditiis aspernatur. Aliquam consequuntur molestias,
          voluptatum dolorem reprehenderit, saepe facilis velit consectetur
        </p>

        <div className="bg-[#FFCB47] h-12 w-full rounded-b-md mt-4 py-2 flex justify-between items-center">
          <div className="w-full flex justify-center" >
            <button className="bg-transparent hover:bg-green-500 text-Slate-950 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};
