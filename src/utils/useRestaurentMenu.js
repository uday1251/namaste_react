import { useEffect, useState } from "react";
import { Menu_API_URL } from "./constants";

const useRestaurentMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_API_URL + resid);
    const json = await data.json();
    // console.log("Hello");
    // console.log(json);
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurentMenu;
