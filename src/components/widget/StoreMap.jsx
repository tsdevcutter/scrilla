import React from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

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

const stores = [
  { 
    id: 1,
    name: "The Local Choice Pharmacy Quenets",
    address: "The Local Choice Pharmacy Quenets -72 High St, Worcester Central, Worcester, 6850",
    position: { lat: -33.644061, lng: 19.4419402 }
  },
  {
    id: 2,
    name: "The Local Choice Pharmacy Quenets Langerug",
    address: "The Local Choice Pharmacy Quenets Langerug- Shop 8, Drostdy Centre, Henry Gird St, Hospital Hill, Worcester, 6850",
    position: { lat: -33.6381557, lng: 19.4279878 }
  }
];

export default function StoreMap() {
  const [selected, setSelected] = React.useState(null);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCDD_nH8QTXPmlzWPqWkhCN2QjnAFXUEKo">
      <GoogleMap mapContainerStyle={containerStyle} 
        center={center} 
        zoom={13}
        >
        {
            window.google && stores.map((store) => (
            <Marker
                key={store.id}
                position={store.position}
                onClick={() => setSelected(store)}
                icon={{
                url: "https://scrillarewards.co.za/assets/images/icon1.png",
                scaledSize: new window.google.maps.Size(40, 40),
                }}
            />
            ))
        }

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
    </LoadScript>
  );
}
