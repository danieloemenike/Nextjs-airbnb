import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/router";
import data from "../data/rooms.json"
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

{/*if any error should occur, it should be from the prop drillingg in search,i used the same name as the import statement */}

const Search = ({data}) => {
    const router = useRouter()
    const{location,startDate,endDate,noOfGuests}= router.query
    const startDate2 = new Date(startDate).toLocaleDateString('en-us',{weekday:"short",year:"numeric",month:"short",day:"numeric"})
    const endDate2 =  new Date(endDate).toLocaleDateString('en-us',{weekday:"short",year:"numeric",month:"short",day:"numeric"})

    const range = `${startDate2} - ${endDate2}`

    
    return (

        <div >
           <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
           <main className="flex ml-2">
           <section className="flex-grow pt-14 px-6">
           <p className="text-xs"> 300+ stays from - {range} for {noOfGuests} guests</p>
           <h1 className="text-3xl font-semiibold mt-2 mb-6"> Stays in {location}</h1>
           <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
           <p className="button button:hover button:active">Cancellation Flexibility</p>
           <p className="button button:hover button:active">Type of Place</p>
           <p className="button button:hover button:active">Price</p>
           <p className="button button:hover button:active">Rooms and Beds</p>
           <p className="button button:hover button:active">More </p>
           </div>
           <div className="flex flex-col">
          {data.map(({id,img, location,description, star,price,total,title})=>{
            return <InfoCard
            key={id} 
            img= {img}
            location={location}
            description={description}
            star ={star}
            price ={price}
            total={total}
            title ={title}
            />
           
          })}
          </div>
          <p>
         
          </p>
           </section>
           <section className="hidden xl:inline-flex xl:min-w-[600px]">
           <Map searchResults = {data}/>
           </section>
           </main>
           <Footer/>
        </div>
    );
}

export function getServerSideProps(context){
    return {
        props:{
            data: data
        }
    }
}



export default Search;