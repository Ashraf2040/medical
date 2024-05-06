
"use client"
import React, { useEffect } from 'react'

import {Loader} from "@googlemaps/js-api-loader"
export default function Map() {
    const mapRef=React.useRef(null)
    
    useEffect(()=>{

        const initMap=async ()=>{
         const loader = new Loader({
             apiKey:process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
             version:"weekly",
             language:"en",
            //  region:"US",
         })
         
            const {Map}= await loader.importLibrary("maps") 
            const position = {
                lat: 39.80186975922447,
                lng:  21.468419412171297,
            }
            const mapOptions = {
                center: position,
                zoom: 17,
                mapId:"my-map-id",
            }
            const map = new Map(mapRef.current, mapOptions)
            // const marker = new google.maps.Marker({
            //     position,
            //     map
            // })
        }
        initMap()
    },[])
  return (
    <div>
        <div ref={mapRef} className="w-full h-screen" />
    </div>
  )
}
