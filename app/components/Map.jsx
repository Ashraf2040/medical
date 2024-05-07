

import React from 'react'

export default function Map() {
  return (
    <div>
      
    </div>
  )
}

// "use client"
// import React, { useEffect } from 'react'

// import {Loader} from "@googlemaps/js-api-loader"
// export default function Map() {
//     const mapRef=React.useRef(null)
    
//     useEffect(()=>{

//         const initMap=async ()=>{
//          const loader = new Loader({
//              apiKey:process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//              version:"weekly",
//              language:"en",
//             //  region:"US",
//          })
         
//             const {Map}= await loader.importLibrary("maps") 
//             const position = {
//                 lat: 21.422510,
//                 lng: 39.826168,
//             }
//             const mapOptions = {
//                 center: position,
//                 zoom: 17,
//                 mapId:"my_map_id",
//             }
//             const map = new Map(mapRef.current, mapOptions)
//             const marker = new google.maps.Marker({
//                 position,
//                 map
//             })
//         }
//         initMap()
//     },[])
//   return (
//     <div>
//         <div cn ref={mapRef} className="w-full h-screen" />
//     </div>
//   )
// }
