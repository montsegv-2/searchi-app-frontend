"use client";

import { useEffect } from "react";

const Mapa = () => {
  const createMap = () => {
    console.log("this is token", process.env.NEXT_PUBLIC_MAPBOX_TOKEN);
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: "map", // container ID
      center: [-103.8078849, 19.2107321],
      zoom: 14,
    });
  };

  useEffect(() => {
    createMap();
  }, []);

  return (
    <div className="w-full h-ful">
      <div id="map" style={{ width: "600px", height: "600px" }}></div>
    </div>
  );
};

export default Mapa;
