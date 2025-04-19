import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { IRequestOptions } from "@/src/interfaces";

if (import.meta.env.VITE_API_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
}

function useApi<T = any>(options: IRequestOptions) {
  const { url, method, body, headers } = options;

  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const parseJson = useCallback((jsonString?: string) => {
    if (!jsonString) return undefined;

    try {
      return JSON.parse(jsonString);
    } catch {
      console.warn("Failed to parse JSON string:", jsonString);
      return undefined;
    }
  }, []);

  const executeRequest = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const parsedHeaders = parseJson(headers);
      const parsedBody = parseJson(body);

      const response = await axios[method](url, parsedHeaders, parsedBody);

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setData(null);
      setIsLoading(false);

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(String(error));
      }
    }
  }, [url, method, headers, body, parseJson]);

  useEffect(() => {
    executeRequest();
  }, [executeRequest]);

  return {
    response: data,
    loading: isLoading,
    error: errorMessage,
  };
}

export default useApi;
