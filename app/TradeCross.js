import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

const TradeCross = () => {
  return (
    <div className={`py-16 z-50 px-10 relative flex flex-col bg-[#0D0D0D]`}>
        <motion.div
            initial={{y:100,opacity:0}}
            whileInView={{y:0,opacity:1,transition: {duration: 0.4, ease: "easeOut"}}}
        className=' bg-[#0C1618] border border-green-950 px-4 lg:px-10 py-10 rounded-xl flex-col md:flex-row gap-4 flex items-center'>
            <div>
            <h1 className='text-4xl lg:text-5xl text-[#d2cece] font-bold'>Trade Cross Chain</h1>
            <p className='text-[#ACACAE] text-sm my-4 w-[80%]'>
                Seamlessly swap assets natively accross chains within minutes.
                No bridge, no wrapping, no hassle.
            </p>
            <button className='
            border-2 border-green-700
            bg-[#1E2A2D] text-[#ACACAE] py-1 px-4 rounded-2xl mt-10'>Learn More</button>
            </div>
            <div className='relative md:0 mt-4'>
                <div className="absolute filter blur-[120px] h-[200px] w-[200px] top-10 left-10
                bg-gradient-to-r from-[#7A3949] to-green-700 rounded-xl "></div>
                <Image src={'/startrek.png'}  width={300} height={300} />
            </div>
        </motion.div>
    </div>
  )
}

export default TradeCross