import Image from "next/image"

function LargeCard({img,title,description,buttonText}) {
    return (
        <section className="relative py-16 cursor-pointer">
          <div className="relative min-w-[300px] h-96 ">
          <Image src={img} layout="fill" objectFit="cover"  alt="footer image" className="rounded-lg "/>
          </div>
          <div className="absolute top-32 left-8 mb-10">
          <h3 className="text-2xl mb-3 w-64 text-white">{title}</h3>
          <p className="text-gray-100 text-sm">{description}</p>
          <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
          </div>
          
        </section>
    );
}

export default LargeCard;