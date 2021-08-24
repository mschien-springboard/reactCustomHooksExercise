import { useState } from "react";
import axios from "axios";

const useAxios = (baseUrl) => {
  const [responses, setResponses] = useState([]);

  const addResponseData = async (formatter = data => data,restOfUrl='') => {
    const res = await axios.get(`${baseUrl}${restOfUrl}`);
    setResponses(data => [...data, formatter(res.data)]);
  };

  const clearResponses = () => setResponses([]);
  
  return [responses, addResponseData, clearResponses];
};

export default useAxios;