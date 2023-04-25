import React from "react";
import axios from "axios";

const Admin = () => {
  const options = {
    method: "GET",
    url: "https://aliexpress-true-api.p.rapidapi.com/hot_products/xiaomi",
    params: { max_price: "10000" },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
      "X-RapidAPI-Host": "aliexpress-true-api.p.rapidapi.com",
    },
  };
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={handleClick}>go</button>
    </>
  );
};

export default Admin;
