"use client";

import { useEffect } from "react";

const Mapa = () => {
  const createMap = () => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: "map", // container ID
      center: [-103.8078849, 19.2107321],
      zoom: 14,
    });

    const marker1 = new mapboxgl.Marker({ color: "red" })
      .setPopup(new mapboxgl.Popup().setHTML("<p>Hello</p>"))
      .setLngLat([-103.8078849, 19.2107321])
      .addTo(map);
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
