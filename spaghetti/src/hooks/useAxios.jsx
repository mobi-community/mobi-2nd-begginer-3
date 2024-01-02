import { useEffect, useState } from "react";

const useAxios = ({ method, rerenderArr, axiosInstance, params, url }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const axiosConfig = {
    method,
    params,
    url,
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
