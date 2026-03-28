"use client";

import jsVectorMap from "jsvectormap";
import { useEffect, useRef } from "react";

import "@/js/world";

export default function Map() {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = new jsVectorMap({
        selector: "#mapOne",
        map: "world",
        zoomButtons: true,
        regionStyle: {
          initial: { fill: "#C8D0D8" },
          hover: { fillOpacity: 1, fill: "#2a809c" },

        },
      });


    }

    return () => {
      if (mapRef.current) {
        const container = document.getElementById("mapOne");
        if (container) container.innerHTML = "";
        mapRef.current = null;
      }
    };
  }, []);
  // useEffect(() => {
  //   new jsVectorMap({
  //     selector: "#mapOne",
  //     map: "world",
  //     zoomButtons: true,
  //     regionStyle: {
  //       initial: {
  //         fill: "#C8D0D8",
  //       },
  //       hover: {
  //         fillOpacity: 1,
  //         fill: "#2a809c",
  //       },
  //     },
  //     regionLabelStyle: {
  //       initial: {
  //         fontWeight: "semibold",
  //         fill: "#fff",
  //       },
  //       hover: {
  //         cursor: "pointer",
  //       },
  //     },
  //     labels: {
  //       regions: {
  //         render(code: string) {
  //           return code.split("-")[1];
  //         },
  //       },
  //     },
  //   });
  // }, []);

  return (
    <div className="h-[422px]">
      <div id="mapOne" className="mapOne map-btn" />
    </div>
  );
}
