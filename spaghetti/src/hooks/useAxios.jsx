import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = ([axiosInfo, rerenderArr]) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    await axios
      .request(axiosInfo)
      .then((res) => {
        console.log(res.data);
        setData(res?.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      await fetchData();
    };
    fetchDataAsync();
  }, [rerenderArr]);

  return { data, error, isLoading };
};

export default useAxios;
