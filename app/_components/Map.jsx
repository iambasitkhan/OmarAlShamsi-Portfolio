// components/Map.tsx
"use client";
import logo from "@/public/logo-01.png"

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;
    if (mapRef.current.children.length > 0) return;

    const center= [25.32417, 55.37452];
    const map = L.map(mapRef.current).setView(center, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // ✅ Add marker at the center location
    L.marker(center).addTo(map).bindPopup("Lawyer: Omar Al-Shamsi").openPopup();
  }, []);

  return <div ref={mapRef} className="h-[400px] w-full" />;
}
