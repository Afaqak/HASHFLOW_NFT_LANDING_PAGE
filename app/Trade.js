import React from 'react'
   import Image from 'next/image'
   import {motion} from 'framer-motion'
const Trade = () => {
    
  return (
    <div className={`py-16 z-50 px-10 relative flex flex-col justify-center items-center bg-[#0D0D0D]`}>
       <h1 className='text-4xl text-[#ACACAE] font-bold'>Just Trade. No Bs.</h1>
         <motion.div 
                 initial={{y: 100,}}
                 whileInView={{y: 0,transition: {duration: 0.4, ease: "easeOut"}}}
         className='grid md:grid-cols-3 grid-cols-1 gap-4'>
            
                <FeatureCard 
                    imageSrc={'/icons/arrow.png'}
                    title={'No Deposit'}
                    description={'Trade directly from your wallet'}
                    gradientFrom={'#7A3949'}
                    gradientTo={'#af5675'}
                />
                <FeatureCard
                    imageSrc={'/icons/percentage.png'}
                    title={'No Commission'}
                    description={'We don\'t charge any fees. The price you see is the price you get.'}
                    gradientFrom={'#673862'}
                    gradientTo={'#263A6E'}
                />
                <FeatureCard
                    imageSrc={'/icons/suprise.png'}
                    title={'No Suprises'}
                    description={'We don\'t charge any fees. The price you see is the price you get.'}
                    gradientFrom={'#07383B'}
                    gradientTo={'#134E74'}
                />
        </motion.div>
       </div>
  )
}

const FeatureCard = ({ imageSrc, title, description, gradientFrom, gradientTo }) => {
    return (
      <div className={`py-7 px-8 flex flex-col justify-center gap-5 rounded-xl mt-10 bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}]`}>
        <Image src={imageSrc} width={50} height={50} />
        <div>
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-[10px] text-[#ACACAE] font-bold">{description}</p>
        </div>
      </div>
    );
  };
  
export default Trade




