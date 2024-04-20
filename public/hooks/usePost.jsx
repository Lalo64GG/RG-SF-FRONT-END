import { useState } from "react";

export const usePost = (url, postObject) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mssge, setMssge] = useState();

  const handleSubmit = async (e) => {
    const token = localStorage.getItem('token')
    console.log(token);
    e.preventDefault();
    try {
      console.log(postObject);

      if (Object.values(postObject).some((value) => value === "")) {
        setSuccess(false);
        setError(true);
        return false;
      }

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(postObject),
      });

      const data = await res.json();
      console.log(data);

      if (data.data.token) {
        localStorage.setItem("token", data.data.token);
      }
      if (data.id) {
        localStorage.setItem("id", data.id);
      }
      if (data.status === "success") {
        setSuccess(true);
      }

      setMssge(data.status)

      return true;
    } catch (error) {
      console.error("Error", error);
      setError(true);
    }
  };

  return {
    handleSubmit,
    error,
    success,
    mssge
  };
};
