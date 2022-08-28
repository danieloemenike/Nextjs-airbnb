import Image from "next/image"
 
function MediumCard({img,title}) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-60 w-80">
            <Image src={img} layout="fill" className="rounded-xl" alt="medium image"/>
            </div>
            <h3 className="text-sm mt-2">{title}</h3>
        </div>
    );
}

export default MediumCard;