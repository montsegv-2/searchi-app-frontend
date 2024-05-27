"use client";

import { getStores } from "@/services/StoresService";
import { useEffect, useState } from "react";

const Mapa = () => {
  const [stores, setStores] = useState([]);
  const [map, setMap] = useState(null);

  //GET STORES API
  const getLatLng = async () => {
    const stores = await getStores();
    setStores(stores);
  };

  useEffect(() => {
    getLatLng();
  }, []);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    const newMap = new mapboxgl.Map({
      container: "map",
      center: [-103.8078849, 19.2107321],
      zoom: 14,
    });

    setMap(newMap);

    return () => newMap.remove();
  }, []);

  //ADD MARKERS
  useEffect(() => {
    if (map && stores.length) {
      stores.forEach((store) => {
        const marker = new mapboxgl.Marker({ color: "red" })
          .setPopup(new mapboxgl.Popup().setHTML(`<p>${store.name}</p>`))
          .setLngLat([store.lng, store.lat])
          .addTo(map);
      });
    }
  }, [map, stores]);

  return (
    <div className="w-full h-full">
      <div id="map" style={{ width: "600px", height: "600px" }}></div>
    </div>
  );
};

export default Mapa;
