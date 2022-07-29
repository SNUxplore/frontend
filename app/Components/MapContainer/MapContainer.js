import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import data from "~/Assets/Data/data.json";
import { useParams } from "@remix-run/react";
export default function MapContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAWWT0hia4MlZlReCvmoWB4PiOdxAy6elI",
  });

  if (!isLoaded) return <div>Loading...</div>;

  const { option } = useParams();
  function getLongLat(url) {
    var regex = new RegExp("@(.*),(.*),");
    const latLongMatch = url.match(regex);
    return latLongMatch;
  }

  const center = { lat: 28.523807, lng: 77.575904 };
  const zoom = 16;

  return (
    <>
      <div style={{ position: "fixed", height: "100%", width: "100%" }}>
        <GoogleMap
          zoom={zoom}
          center={center}
          gestureHandling={"cooperative"}
          mapContainerStyle={{
            height: "100%",
            width: "100%",
          }}
        >
          {/*<Marker title="Hostel 1C" position={center} />)*/}
          {data[option].map((place, index) => {
            return (
              <Marker
                key={index}
                title={place.name}
                position={{
                  lat: parseFloat(getLongLat(place.location)[1]),
                  lng: parseFloat(getLongLat(place.location)[2]),
                }}
              />
            );
          })}
        </GoogleMap>
      </div>
    </>
  );
}
