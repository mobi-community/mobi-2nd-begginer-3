import { useState, useEffect } from "react";

const useFetch = ({ url, method, query }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = {
    query: query,
  };

  const queryString = new URLSearchParams(params).toString();
  const urlWithParams = `${url}?${queryString}`;

  useEffect(() => {
    fetch(urlWithParams, {
      method,
      headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
      },
    })
      .then((response) => {
        console.log("response", response);
        if (!response) {
          throw Error("데이터를 불러올 수 없습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.documents);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
