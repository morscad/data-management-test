import React, { useContext, useState } from "react";
import axios from "axios";

export const useWebService = (obj) => {
  const baseURL = process.env.baseURL || "https://jsonplaceholder.typicode.com/";
  const { method, url } = obj;
  //   const { setError, clearError } = useContext(MainContext);
  const [result, setResult] = useState();
  const [error, setLocalError] = useState();
  const [loading, isLoading] = useState(false);

  const callHTTP = () => {
    isLoading(true);
    axios
      .request({
        method,
        url,
        baseURL,
      })
      .then((response) => {
        setResult(response.data);
        // clearError();
      })
      .catch((err) => {
        /*switch (true) {
          case err.response.status >= 400:
            // setError({ code: err.response?.status.toString(), message: err.message });
            break;
          default:
            // setLocalError(err.message);
            break;
        }*/
      })
      .finally(() => {
        isLoading(false);
      });
  };

  return { result, error, loading, callHTTP };
};
