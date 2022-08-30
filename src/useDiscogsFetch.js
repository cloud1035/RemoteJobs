import { useEffect, useRef, useState } from "react";
import DiscogsQueue from "@/utils/DiscogsQueue";
import { v4 as uuidv4 } from "uuid";
const url = "";
const useDiscogsFetch = (url, fetcher) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const requestId = useRef();

  const cancel = () => {
    DiscogsQueue.removeRequest(requestId.current);
  };

  useEffect(() => {
    requestId.current = uuidv4();
    const fetchData = async () => {
      try {
        const data = await DiscogsQueue.pushRequest(
          async () => await fetcher(url),
          requestId.current
        );
        setData(data);
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
    return () => {
      cancel();
    };
  }, [url, fetcher]);

  return {
    data,
    loading: !data && !error,
    error,
    cancel,
  };
};
