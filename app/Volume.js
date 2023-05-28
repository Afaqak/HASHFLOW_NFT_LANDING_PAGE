 import React from 'react'
 import font_Grotesk from '@/utils/font'
    import Image from 'next/image'
    import {motion,useScroll} from 'framer-motion'
 const Volume = () => {

   return (
     <div className={`py-16 px-10 z-50 relative flex flex-col justify-center items-center bg-[#0D0D0D]  ${font_Grotesk.className}`}>
        <h1 className='text-4xl text-[#ACACAE] font-bold'>$12B+ Total Volume</h1>
        <motion.div
        initial={{y: 100,}}
        whileInView={{y: 0,transition: {duration: 0.4, ease: "easeOut"}}}
        className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='py-7 px-20 flex  items-center justify-center gap-5 
                bg-[#11162E] rounded-xl mt-10 border border-blue-900'>
           
                <Image
                 src={'/etherum.svg'} width={100} height={100} />
                <div>
                    <p className='text-[10px] text-[#ACACAE] font-bold'>Ethereum</p>
                    <h1 className='text-xl text-white font-bold'>$4.5B</h1>
                </div>
            </div>
            <div className='py-7 px-20 flex items-center justify-center gap-5 
                bg-[#270709] border-red-900 border rounded-xl mt-10'>
           
                <Image src={'/optimism.svg'} width={100} height={190} />
                <div>
                    <p className='text-[10px] text-[#ACACAE] font-bold'>Ethereum</p>
                    <h1 className='text-xl text-white font-bold'>$4.5B</h1>
                </div>
            </div>
            <div className='py-7 px-20 flex items-center justify-center gap-5 
                bg-[#251E0D] rounded-xl mt-10 border border-yellow-800'>
           
                <Image src={'/cube.svg'} width={100} height={100} />
                <div>
                    <p className='text-[10px] text-[#ACACAE] font-bold'>Ethereum</p>
                    <h1 className='text-xl text-white font-bold'>$4.5B</h1>
                </div>
            </div>
            <div className='py-7 px-20 flex items-center justify-center gap-5
                bg-[#270709] rounded-xl mt-10 border-red-900 border'>
           
                <Image src={'/avalanche.svg'} width={100} height={100} />
                <div>
                    <p className='text-[10px] text-[#ACACAE] font-bold'>Ethereum</p>
                    <h1 className='text-xl text-white font-bold'>$4.5B</h1>
                </div>
            </div>
            <div className='py-7 px-20 flex items-center justify-center gap-5
                bg-[#1A0E2E] rounded-xl mt-10 border border-purple-800'>
           
                <Image src={'/S.svg'} width={100} height={100} />
                <div>
                    <p className='text-[10px] text-[#ACACAE] font-bold'>Ethereum</p>
                    <h1 className='text-xl text-white font-bold'>$4.5B</h1>
                </div>
            </div>
            <div className='py-7 px-20 flex items-center justify-center gap-5
                bg-[#06161F] rounded-xl mt-10 border-cyan-900 border'>
           
                <Image src={'/arbitrium.svg'} width={100} height={100} />
                <div>
                    <p className='text-[10px] text-[#ACACAE] font-bold'>Ethereum</p>
                    <h1 className='text-xl text-white font-bold'>$4.5B</h1>
                </div>
            </div>
        </motion.div>
        </div>
   )
 }
 
 export default Volume