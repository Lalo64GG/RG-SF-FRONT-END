

export const Card = () => {
  return (
    <div className=' bg-white flex flex-col justify-center items-center w-72 rounded-md shadow-md my-5'>
        <div className='w-full'>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWl_Jj8mn86wIMP4Qr3zEOOsfZL30oNsLry7PSyptYg&s"
            className=' rounded-t-md w-full'
          />
        </div>
        <div>
          <h2 className=' text-center font-bold text-2xl text-[#03A460]'>
            Granja 1
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt blanditiis aspernatur. Aliquam consequuntur molestias, voluptatum dolorem reprehenderit, saepe facilis velit consectetur 
          </p>

          <div className='bg-[#FFCB47] h-12 w-full rounded-b-md mt-4 py-2 flex justify-between items-center'>
          <div className=' h-12 flex flex-col justify-center items-center px-2'>
            <p className="text-white text-center font-bold">
              Temperatura: 
          
            </p>
            <span className='text-white font-normal text-center'>
                25°C
              </span>
          </div>
          <div className='border-x-2 border-black h-12 px-2'>
            <p className="text-white font-semibold text-center">
              Comida:
              <span className=' font-normal text-center '> 2Kg</span>
            </p>
          </div>
          <div className='  px-4'>
            <p className="text-white font-semibold rounded-md">Agua: 1 L</p>
          </div>
        </div>
        </div>
    </div>
  )
}
