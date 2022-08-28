import Image from "next/image";


const Banner = () => {
    return (
        <div className="relative h-[200px] sm:h-[200px] lg:h-[400px] xl:h-[400px] 2xl:h-[500px] ">
       
           <Image src="/banner2.jpg" alt="banner image" layout="fill" objectFit="cover" priority="true" />
        {/*
           <div className="absolute top-1/2 w-full text-center"><p className="text-black font-bold">Not sure where to go? Perfect.</p>
           <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full my-3 hover:shadow-xl active:scale-90 transitioon duration-150">Flex </button>
           

           </div>
            */}
        </div>
    );
}

export default Banner;