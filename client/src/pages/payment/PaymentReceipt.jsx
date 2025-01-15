import React from 'react'
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Icon from "../../assets/images/ICON.png"
import Barcode from "../../assets/images/BAR CODE.png"
import { MdFileCopy } from "react-icons/md";
import { useState } from 'react';
import { FiSend } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsPrinter } from "react-icons/bs";
const PaymentReceipt = () => {
  const [copySuccess, setCopySuccess] = useState(false);
const [dropDown, setDropDown] = useState(false);

const handleDrop = () => {
setDropDown(!dropDown)
}
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset the success state after 2 seconds
    });
  };
  return (
    <div className='w-screen  flex-col h-screen flex'>
      {/* header */}
      <div className='w-full flex justify-between items-center h-[100px] bg-black text-2xl px-5 md:p-10 lg:p-10'>
      <div className='justify-center flex items-center gap-3'>
      <TfiArrowCircleLeft  className='text-white text-4xl'/>
      <span className='text-white text-2xl'>E-RECEIPT</span>
      </div>
      <div className='relative bg-red'>
        <BsThreeDotsVertical className='text-white text-2xl' onClick={handleDrop}/>
        {dropDown && (
          <div className='bg-gray-500 text-sm w-[120px] absolute top-10 rounded-lg right-0 flex p-4 flex-col'>
            <div className='text-md   flex gap-1 items-center justify-end '>
              <span>Share</span>
              <FiSend/>
            </div>
            <div className='text-md text-right flex gap-1 items-center justify-end'>
              <span>Save</span>
              <MdOutlineFileDownload/>
            </div>
            <div className='text-md  text-right flex gap-1 items-center justify-end'>
              <span>Print</span>
              <BsPrinter/>
            </div>
          </div>
        )}
      </div>
      </div>

      {/* receipt */}
<div className='w-full justify-center flex items-center  h-screen'>
<div className=' w-[350px] md:w-[440px] p-10 space-y-4 shadow-xl rounded-lg'>
<div className='w-full  text-center flex items-center justify-center'>
  <img src={Icon} className='w-20 h-20'/>
</div>
<div className='w-full  text-center flex items-center justify-center'>
  <img src={Barcode} className='w-[300px]  h-[60px] md:h-[90px]'/>
</div>
<div className='w-full  space-y-2'>
  
<div className='justify-between items-center flex text-black bold text-[13px] md:text-lg'>
<span className='font-bold'>Name</span>
<span>Scott R. Shoemake</span>
</div>

<div className='justify-between items-center flex text-black bold text-[13px] md:text-lg'>
<span className='font-bold'>Email</span>
<span>shoemake@redial.com</span>
</div>

<div className='justify-between items-center flex text-black bold text-[13px] md:text-lg'>
<span className='font-bold'>Course</span>
<span>3D Charecter Illustration cre..</span>
</div>

<div className='justify-between items-center flex text-black bold text-[13px] md:text-lg'>
<span className='font-bold'>Category</span>
<span>Web Development</span>
</div>

<div className='justify-between items-center flex text-black bold text-[13px] md:text-lg'>
              <span className="font-bold">TransactionId</span>
              <div className="flex items-center gap-2">
                <span className='text-[13px] md:text-lg'>SKE24343434</span>
                <MdFileCopy
                  className="text-black text-[14px] cursor-pointer"
                  onClick={() => copyToClipboard("SKE24343434")}
                />
              </div>
              </div>

<div className='justify-between items-center flex text-black bold text-[13px] md:text-lg'>
<span className='font-bold'>Price</span>
<span>50$</span>
</div>


<div className='justify-between items-center flex text-black bold text-[13px] md:text-lg'>
<span className='font-bold'>Date</span>
<span>09-01-2025 / 15:45</span>
</div>

<div className='justify-between items-center flex text-black bold text-[13px] md:text-lg'>
<span className='font-bold'>Status</span>
<button className='bg-green-900 text-white  w-[40px] md:w-[50px]'>Paid</button>
</div>









</div>

</div>
</div>
    </div>
  )
}

export default PaymentReceipt