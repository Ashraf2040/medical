"use client";


import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  CircleF,
} from '@react-google-maps/api';
g
import { useMemo, useState } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import styles from './Home.module.css';

const HomeMap = () => {
  const [lat, setLat] = useState(21.422510);
  const [lng, setLng] = useState(39.826168);

  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: libraries ,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.sidebar}>
        {/* render Places Auto Complete and pass custom handler which updates the state */}
        <PlacesAutocomplete
          onAddressSelect={(address) => {
            getGeocode({ address: address }).then((results) => {
              const { lat, lng } = getLatLng(results[0]);

              setLat(lat);
              setLng(lng);
            });
          }}
        />
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '800px', height: '800px' }}
        onLoad={(map) => console.log('Map Loaded')}
      >
        <MarkerF
          position={mapCenter}
          onLoad={() => console.log('Marker Loaded')}
        />

        {[1000, 2500].map((radius, idx) => {
          return (
            <CircleF
              key={idx}
              center={mapCenter}
              radius={radius}
              onLoad={() => console.log('Circle Load...')}
              options={{
                fillColor: radius > 1000 ? 'red' : 'green',
                strokeColor: radius > 1000 ? 'red' : 'green',
                strokeOpacity: 0.8,
              }}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

const PlacesAutocomplete = ({
  onAddressSelect,
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: 'us' } },
    debounce: 300,
    cache: 86400,
  });

  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div className={styles.autocompleteWrapper}>
      <input
        value={value}
        className={styles.autocompleteInput}
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="123 Stariway To Heaven"
      />

      {status === 'OK' && (
        <ul className={styles.suggestionWrapper}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};

export default HomeMap;





























































// "use client"
// import React, { useEffect } from 'react'

// import {Loader} from "@googlemaps/js-api-loader"
// export default function Map() {
//     const mapRef=React.useRef(null)
    
//     useEffect(()=>{

//         const initMap=async ()=>{
//          const loader = new Loader({
//              apiKey:process.env.NEXT_PUBLIC_MAPS_API_KEY,
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
//         //     const marker = new google.maps.Marker({
//         //         position,
//         //         map
//         //     })
//         }
//         initMap()
//     },[])
//   return (
//     <div>
//         <div  ref={mapRef} className="w-full h-[600px]" />
//     </div>
//   )
// }
