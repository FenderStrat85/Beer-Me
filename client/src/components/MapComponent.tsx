import React from "react";
import { Map, Marker } from "pigeon-maps";

const MapComponent = (props: any) => {
  const data = props.data;
  console.log(data);
  return (
    <Map height={300} defaultCenter={[34.0522, -118.2437]} defaultZoom={10}>
      {data?.map((item: any) => {
        console.log(item.longitude);
        console.log(typeof Number(item.longitude));
        return (
          <Marker
            width={50}
            anchor={[Number(item.latitude), Number(item.longitude)]}
            onClick={() => console.log(item)}
            key={item.id}
          />
        );
      })}
      <Marker
        width={50}
        anchor={[39.9055, 116.3976]}
        onClick={() => console.log("I got clicked")}
      />
      <Marker width={50} anchor={[51.508, 0.1281]} />
    </Map>
  );
};

export default MapComponent;
