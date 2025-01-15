import React from 'react'
import Header from '../../components/header/Header'
import Widget from '../../components/widget/Widget'

const Transactions = () => {
  return (
    <div className='w-full h-screen flex flex-col bg-[#d9d9db]'>
      {/* Header */}
      <div className='w-full fixed'>
      <Header title="TRANSACTIONS" showSettings={true} showSearch={true} />
      </div>
     
      
      {/* Content */}
      <div className='w-full h-screen items-center justify-center flex p-2 overflow-y-auto scrollbar-hidden bg-[#d9d9db]  mt-[100px]'>
      <div className='flex flex-col items-center shadow-xl rounded-lg w-[360px] md:w-[700px] justify-start  overflow-y-auto space-y-4 h-full'>
        {[...Array(8)].slice(0, window.innerWidth < 768 ? 7 : 4).map((_, index) => ( // Fixed map method
          <div key={index} className='flex justify-between items-center gap-3 md:gap-6 p-2 w-[90%] bg-gray-100 rounded-md shadow-xl mb-2'>
            {/* Avatar */}
            <div className=' w-[80px] flex  h-[80px] bg-black rounded-lg'></div>
            
            {/* Transaction Details */}
            <div className='flex flex-col flex-1 space-y-1 p-1 w-full'>
              <span className='font-bold text-[13px] md:text-[20px]'>Build Personal Branding</span>
              <span className='text-gray-500 text-[10px] md:text-[15px]'>Web Designer</span>
              <div className='w-[50px] bg-[#167f71] text-white text-[10px] md:text-[12px] text-center rounded-sm'>Paid</div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
      
      {/* Widget */}
      <Widget />
    </div>
  );
};

export default Transactions;
