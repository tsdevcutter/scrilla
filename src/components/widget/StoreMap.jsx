import React from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";

/*
const brandMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#494949" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
  { featureType: "water", stylers: [{ color: "#e0f2eb" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#d2f5de" }] },
  { featureType: "road.highway", stylers: [{ color: "#9fe3c4" }] },
  { featureType: "landscape", stylers: [{ color: "#f9f9f9" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "administrative", stylers: [{ color: "#088c4e" }] }
];
*/

const containerStyle = {
  width: "100%",
  height: "500px"
};

const center = {
  lat: -33.644286, // Worcester as default
  lng: 19.4504893
};



export default function StoreMap({stores}) {
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCDD_nH8QTXPmlzWPqWkhCN2QjnAFXUEKo"
  });

  const [selected, setSelected] = React.useState(null);
  
  if (!isLoaded) return <div>Loading map...</div>;

  return (
     <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
      {stores.map((store) => (
        <Marker
          key={store.id}
          position={store.position}
          onClick={() => setSelected(store)}
          icon={{
            url: "https://scrillarewards.co.za/assets/images/icon1.png",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        />
      ))}

      {selected && (
        <InfoWindow
          position={selected.position}
          onCloseClick={() => setSelected(null)}
        >
          <div>
            <h4>{selected.name}</h4>
            <p>{selected.address}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
