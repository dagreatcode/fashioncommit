import React from "react";
import axios from "axios";

const Admin = () => {
  // // The best Ali express api
  //   const options = {
  //     method: "GET",
  //     url: "https://aliexpress-true-api.p.rapidapi.com/hot_products/xiaomi",
  //     params: { max_price: "10000" },
  //     headers: {
  //       "Access-Control-Allow-Credentials": true,
  //       "content-type": "application/octet-stream",
  //       "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
  //       "X-RapidAPI-Host": "aliexpress-true-api.p.rapidapi.com",
  //     },
  //   };


//   const options = {
//     method: "GET",
//     url: "https://ali-express1.p.rapidapi.com/categories",
//     headers: {
//       "Access-Control-Allow-Credentials": true,
//       "content-type": "application/octet-stream",
//       "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
//       "X-RapidAPI-Host": "ali-express1.p.rapidapi.com",
//     },
//   };

  // // Try it on api https://rapidapi.com/texel-inc-texel-inc-default/api/texel-virtual-try-on
  // const encodedParams = new URLSearchParams();
  // encodedParams.set('clothing_image_url', '<REQUIRED>');
  // encodedParams.set('avatar_image_url', '<REQUIRED>');

  // const options = {
  //   method: 'POST',
  //   url: 'https://texel-virtual-try-on.p.rapidapi.com/try-on-url',
  //   headers: {
  //     'content-type': 'application/x-www-form-urlencoded',
  //     'X-RapidAPI-Key': 'd45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1',
  //     'X-RapidAPI-Host': 'texel-virtual-try-on.p.rapidapi.com'
  //   },
  //   data: encodedParams,
  // };

  // // Amazon Search https://rapidapi.com/bernardko/api/parazun-amazon-data/
  // const options = {
  //     method: 'GET',
  //     url: 'https://parazun-amazon-data.p.rapidapi.com/product/summaries/',
  //     params: {
  //       asins: 'B07R6V1MXW,B07QHC1FS6,1501110365',
  //       region: 'US',
  //       page: '1'
  //     },
  //     headers: {
  //       'content-type': 'application/octet-stream',
  //       'X-RapidAPI-Key': 'd45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1',
  //       'X-RapidAPI-Host': 'parazun-amazon-data.p.rapidapi.com'
  //     }
  //   };

  // https://rapidapi.com/h0p3rwe/api/tiktok-all-in-one
    const options = {
      method: 'GET',
      url: 'https://tiktok-all-in-one.p.rapidapi.com/search/top',
      params: {
        query: 'top fashion',
        offset: '20'
      },
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'd45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1',
        'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
      }
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
