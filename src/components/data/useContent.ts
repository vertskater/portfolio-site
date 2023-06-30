import { useEffect, useState } from "react";
import IData from "../../IData";

export default function useContent() {
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://vertskater.github.io/json-files/content.json"
      );
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  return data;
}
