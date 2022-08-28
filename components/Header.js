import Image from "next/image"
import {MagnifyingGlassCircleIcon} from "@heroicons/react/24/solid"
import {GlobeAltIcon} from "@heroicons/react/24/solid"
import {Bars3Icon} from "@heroicons/react/24/solid"
import {UserCircleIcon} from "@heroicons/react/24/solid"
import {useState} from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {useRouter} from "next/router"
function Header({placeholder}) {
        const router = useRouter();
        const [searchInput,setSearchInput] = useState('')
        const [startDate,setStartDate] = useState(new Date())
        const [endDate,setEndDate] = useState(new Date())
        const[noOfGuests,setNoOfGuests]=useState(1)
        const selectionRange ={
            startDate: startDate,
            endDate: endDate,
            key: 'selection'
        }

        const handleSelect=(ranges)=>{
            setStartDate(ranges.selection.startDate)
            setEndDate(ranges.selection.endDate)
        }
        const resetInput=()=>{
            setSearchInput("")
        }
        {/* te date in the string function needed to be transformed into a string */}
        const search=()=>{
            router.push({
                pathname:'/search',
                query:{
                    location:searchInput,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noOfGuests,
                }
            })
        }
    return (

        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        <div onClick={()=>router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image src="/airbnb.png" layout="fill" objectFit="contain" objectPosition="left" alt="banner-image"/>
        </div>

        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">

        <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} type="text" placeholder={placeholder ||"start your  search" } className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray"/>
        <MagnifyingGlassCircleIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
        </div>

        <div className="flex items-center space-x-4 justify-end text-gray-500">
            <p className="hidden md:inline cursor-pointer"> Become a host</p>
            <GlobeAltIcon className="h-6 cursor-pointer"/>
            
      

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
        <Bars3Icon className="h-6"/>
        <UserCircleIcon className="h-6"/>
        </div>
        </div>
        {searchInput && <div className="flex flex-col col-span-3 mx-auto mt-2">
            <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
                Number Of Guests
            </h2>
            <UserCircleIcon className="h-5"/>
            <input value={noOfGuests} min={1} onChange={(e)=>setNoOfGuests(e.target.value)} type="number" className="pl-2 w-12 text-lg outline-none text-red-400 cursor-pointer"/>
            </div>
            <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
            <button onClick={search} className="flex-grow text-red-400">Search</button>
            </div>
            </div>}
        </header>

    );
}

export default Header;