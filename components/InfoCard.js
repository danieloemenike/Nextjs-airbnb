import Image from "next/image";
import {HeartIcon} from "@heroicons/react/24/outline"
import {StarIcon} from "@heroicons/react/24/solid"
function InfoCard({img, location,description, star,price,total,title}) {
   
    return (
        <div className="flex py-7 px-2 border-b cursor-pointer pr-4 hover:opacity-90 hover:shadow-lg  transition duration-200 ease-out">
           <div className="relative h-12 w-40 md:h-52 md:w-80 flex-shrink-8 hover:scale-105">
           <Image src={img} alt="houses for rent" layout="fill" objectFit="cover" className="rounded-2xl "/>
           </div>
          <div className="flex flex-grow flex-col pl-5" >
          <div className="flex justify-between"><p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer"/>
          </div>
          <h4 className="text-xl">{title}</h4>

          <div className="border-b w-2 pt-3"/>
          <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

          <div className="flex justify-between items-end pt-5">
          <p className="flex items-center"><StarIcon className="h-5 text-red-400 pr-1"/> {star}</p>
          <div className="">
          <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
          <p className="text-right font-extralight">{total}</p>
          </div>
          </div>
          </div>
       

        </div>
    );
}

export default InfoCard;