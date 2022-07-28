import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import data from "~/Assets/Data/data.json";
import { useParams } from "@remix-run/react";
export default function MapContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAWWT0hia4MlZlReCvmoWB4PiOdxAy6elI",
  });
  // const myStyle = [
  //   {
  //     elementType: "labels",
  //     stylers: [
  //       {
  //         visibility: "off",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "administrative.land_parcel",
  //     stylers: [
  //       {
  //         visibility: "off",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "administrative.neighborhood",
  //     stylers: [
  //       {
  //         visibility: "off",
  //       },
  //     ],
  //   },
  // ];

  if (!isLoaded) return <div>Loading...</div>;

  const { option } = useParams();
  function getLongLat(url) {
    var regex = new RegExp("@(.*),(.*),");
    const latLongMatch = url.match(regex);
    //console.log(latLongMatch);
    //console.log(name);
    return latLongMatch;
  }

  {
    data["Academics"].map((place, index) => {
      console.log(index);
      console.log(place.name);

      console.log(parseInt(getLongLat(place.location)[1]));
      console.log(parseInt(getLongLat(place.location)[2]));
    });
  }

  const center = { lat: 28.523807, lng: 77.575904 };
  const zoom = 16;

  return (
    <>
      <div style={{ position: "fixed", height: "100%", width: "60%" }}>
        <GoogleMap
          zoom={zoom}
          center={center}
          gestureHandling={"cooperative"}
          mapContainerStyle={{
            height: "50em",
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
