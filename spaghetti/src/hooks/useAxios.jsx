import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = ({ method, axiosInstance, url, rerenderArr, params }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const axiosConfig = {
    method,
    axiosInstance,
    rerenderArr,
    url,
    params,
  };

  const fetchData = async () => {
    await axiosInstance
      .request(axiosConfig)
      .then((res) => {
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
