import { useState, useEffect } from "react";
import api from "@/src/api";
import { Nullable } from "@/src/interfaces";

interface HttpProps {
  url: string;
  method: "get" | "post" | "put" | "patch" | "delete";
  body?: string;
  headers?: string;
}

const useAxios = <T>({ url, method, body, headers }: HttpProps) => {
  const [response, setResponse] = useState<Nullable<T>>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    api[method](url, headers && JSON.parse(headers), body && JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;
