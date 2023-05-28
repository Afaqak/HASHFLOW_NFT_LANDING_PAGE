import Image from 'next/image';

const ShinyBox = ({ gradient1, gradient2, location }) => {
  return (
    <div className="w-10 flex relative items-center justify-center h-10 bg-[#0F2A40]">
      <div
        style={{ background: `linear-gradient(to right, ${gradient1}, ${gradient2})` }}
        className={`absolute inset-0 opacity-50 w-full h-full filter blur-[20px] `}
      ></div>
      <Image
        src={location}
        alt={location}
        className="z-10"
        width={30}
        height={30}
        objectFit="cover"
      />
    </div>
  );
};

export default ShinyBox;