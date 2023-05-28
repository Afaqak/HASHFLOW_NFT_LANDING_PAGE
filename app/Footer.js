import React from 'react'
const Footer = () => {
  return (
    <div className={`py-16 px-10 relative flex flex-col bg-[#0D0D0D] `}>
    <div className=' bg-[#0F131B] border border-[#182132] px-4 lg:px-10 py-10 rounded-xl flex-col justify-center md:flex-row gap-4 flex items-center'>
        <div className='relative lg:text-center '>
        <h1 className='text-5xl text-[#d2cece]  font-bold'>Join The Hashverse And Earn Rewards</h1>
        <p className='text-[#ACACAE] text-sm my-4'>
            Shape the future by joining the Hashverse community. Earn rewards by staking your tokens and participating in governance.
            Stake tokens, complete quests, and earn hashflow tokens & one-of-a-kind NFTs.
        </p>
        <button className="bg-[#0F2A40]  text-[#ACACAE] border-gray-600 border text-xl px-6 py-2 mt-4 rounded-full">
            Get Started
          </button>
       </div>
    </div>
</div>
  )
}

export default Footer