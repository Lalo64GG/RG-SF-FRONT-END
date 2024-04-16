import React, { useEffect, useState } from "react";

export const useGet = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {

        const token = localStorage.getItem('token')
        console.log(token);

      try {
        const res = await fetch(url,{
            headers: {
            "Content-Type": "application/json",
            Authorization: ` ${token}` 
            }
        });

        const data = await res.json();
        console.log(data);
        setData(data);
        if (data.success) {
          setSuccess(true);
        }

        return true;
      } catch (error) {
        console.error("Error", error);
        setError(true);
      }
    };
    fetchApi();
  }, []);

  return {
    data,
    error,
    success
  };
};
