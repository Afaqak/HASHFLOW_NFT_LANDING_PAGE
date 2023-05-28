import React from 'react'
import font_Grotesk from '@/utils/font'
   import Image from 'next/image'
   import {motion} from 'framer-motion'
const Trade = () => {
    
  return (
    <div className={`py-16 z-50 px-10 relative flex flex-col justify-center items-center bg-[#0D0D0D]  ${font_Grotesk.className}`}>
       <h1 className='text-4xl text-[#ACACAE] font-bold'>Just Trade. No Bs.</h1>
         <motion.div 
                 initial={{y: 100,}}
                 whileInView={{y: 0,transition: {duration: 0.4, ease: "easeOut"}}}
         className='grid md:grid-cols-3 grid-cols-1 gap-4'>
            <div className='py-7 px-8 flex flex-col justify-center gap-5 
                bg-gradient-to-r  from-[#7A3949] to-[#af5675] rounded-xl mt-10'>
                <Image src={'/icons/arrow.png'} width={50} height={50} />
                <div>   
                    <h2 className='text-xl text-white font-bold'>No Deposit</h2>
                    <p className='text-[10px] text-[#ACACAE] font-bold'>Trade directly from your wallet</p>
                </div>
            </div>
            <div className='py-7 px-8 flex flex-col  justify-center gap-5 
                bg-gradient-to-r from-[#673862] to-[#263A6E] rounded-xl mt-10 '>
                <Image src={'/icons/percentage.png'} width={50} height={50} />
                <div>   
                    <h2 className='text-xl text-white font-bold'>No Commission</h2>
                    <p className='text-[10px] text-[#ACACAE] font-bold'>
                        We don't charge any fees. The price you see is the price you get.
                    </p>
                </div>
            </div>
            <div className='py-7 px-8 flex flex-col  justify-center gap-5 
                 rounded-xl mt-10 bg-gradient-to-r from-[#07383B] to-[#134E74] '>
                <Image src={'/icons/suprise.png'} width={50} height={50} />
                <div>   
                    <h2 className='text-xl text-white font-bold'>No Suprises</h2>
                    <p className='text-[10px] text-[#ACACAE] font-bold'>
                        We don't charge any fees. The price you see is the price you get.
                    </p>
                </div>
            </div>
        </motion.div>
       </div>
  )
}

export default Trade