import { useEffect, useState } from "react";

export const useCurrentPos = () => {
  const defaultLat = "35.1798200522868";
  const defaultLon = "129.075087492149";
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;

    // console.log(latitude, longitude);
    setLat(latitude);
    setLon(longitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
  }, [lat, lon]);

  return {
    lat,
    lon,
  };
};
