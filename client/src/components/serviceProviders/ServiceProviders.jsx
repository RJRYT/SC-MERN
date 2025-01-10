import React from 'react'

const ServiceProviders = () => {
  return (
    <div className='flex w-full gap-2 flex-col justify-center items-center'>
        <div className='flex text-black justify-between w-full p-2'>
            <span className='text-sm font-bold'>Top Service Providers</span> 
            <span className='text-sm font-bold'>SEE ALL</span>
        </div>
        <div className='md:grid gap-2  w-[300px] md:w-[720px] lg:w-[800px] overflow-x-auto scrollbar-hidden flex md:grid-cols-[repeat(auto-fit,minmax(80px,1fr))]'>
        {[...Array(7)].map((provider)=>(
            <div className='flex flex-col space-y-2 p-1'>
<div className='w-[60px] h-[60px] md:w-[100px] md:h-[100px] bg-black rounded-lg'>

</div>
<span className='flex justify-center items-center'>Sarah</span>
            </div>
            
           
        ))}
         </div>
    </div>
  )
}

export default ServiceProviders