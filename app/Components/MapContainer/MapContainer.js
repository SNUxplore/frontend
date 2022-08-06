import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import data from "~/Assets/Data/data.json";

import { useParams } from "@remix-run/react";

export default function MapContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAWWT0hia4MlZlReCvmoWB4PiOdxAy6elI",
  });
  if (!isLoaded) return <div>Loading...</div>;

  const { option } = useParams();

  const url = window.location.href;
  const word = url.split("=")[2];
  const currentPlace = word ? decodeURIComponent(word) : "";

  function getLongLat(url) {
    var regex = new RegExp("@(.*),(.*),");
    const latLongMatch = url.match(regex);
    return latLongMatch;
  }

  const center = { lat: 28.525421, lng: 77.574452 };
  const zoom = 16;

  return (
    <>
      <div style={{ position: "fixed", height: "100%", width: "100%" }}>
        <GoogleMap
          zoom={zoom}
          center={center}
          mapTypeId={"satellite"}
          labels={true}
          gestureHandling={"cooperative"}
          mapContainerStyle={{
            height: "100%",
            width: "100%",
          }}
        >
          {data[option].map((place, index) => {
            return (
              <Marker
                key={index}
                title={place.name}
                animation={place.name == currentPlace ? 1 : 2}
                zIndex={place.name == currentPlace ? 2 : 1}
                position={{
                  lat: parseFloat(getLongLat(place.location)[1]),
                  lng: parseFloat(getLongLat(place.location)[2]),
                }}
              >
                {place.name == currentPlace && (
                  <InfoWindow
                    position={{
                      lat: parseFloat(getLongLat(place.location)[1]) + 0.001,
                      lng: parseFloat(getLongLat(place.location)[2]),
                    }}
                  >
                    <div>
                      <a href={place.location}>Google Maps Link</a>
                      <div>&rarr; {place.name}</div>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            );
          })}
        </GoogleMap>
      </div>
    </>
  );
}
