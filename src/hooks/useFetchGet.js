import { useEffect, useState } from "react";
import { fetchGet } from "../services/api-jsonplaceholder/fetchService";

export default function useFetchGet(route) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
        const response = await fetchGet(route);
        setData(response);
        console.log(data);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
}
