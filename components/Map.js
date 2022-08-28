import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import {useState} from "react"

import getCenter from 'geolib/es/getCenter'

function Map({searchResults}) {
    const [selectedLocation, setSelectedLocation] = useState({})
//Mapping over searchResults Json to get the long&lat.Some implementation were gotten from geolib documentation on github
    const coordinates = searchResults.map(result=>({
        longitude:result.long,
        latitude:result.lat
    }))
   
    const center = getCenter(coordinates)


    const [viewPort,setViewPort] = useState({
        width:"100%",
        height:"100%",
        latitude:center.latitude,
        longitude:center.longitude,
        zoom:3,
    })
   
  
    return (
        <ReactMapGL
        mapStyle="mapbox://styles/danieloemenike/cl7asj1b6003r15nqdia0twp0"
        mapboxAccessToken={process.env.mapbox_publickey}
        {...viewPort}
        onViewPortChange={(nextViewPort) => setViewPort(nextViewPort)}
        >
        {searchResults.map((result)=>{
           return <div key= {result.id}>
            <Marker
                longitude={result.long}
                latitude={result.lat}
                offsetLeft={-20}
                offsetTop = {-10}
            >
            <p role="img" onClick={() => setSelectedLocation(result)} className='cursor-pointer text-2xl animate-bounce' aria-label="house location">  
            🏡
            </p>
            </Marker>
            {/* The popup for the marker */}

                {selectedLocation.long === result.long && (
                <Popup
                onClose={()=> setSelectedLocation({})}
                closeOnClick={true}
                latitude={selectedLocation.lat}
                longitude={selectedLocation.long}
                >
             {result.long}
                </Popup>
            ) }
            </div>
        })}
        </ReactMapGL>
    );
}

export default Map;
