import axios from "axios";
import Card from "./Card";
import React, { useState, useEffect } from "react";
const Country = () => {
  const [data, setData] = useState([]);
  const [selectRegion, setSelectRegion] = useState("");
 console.log(selectRegion, 'mappage')
  const continent = [
    "",
    "Europe",
    "Africa",
    "Americas",
    "Asia",
    "Oceania",
  ];
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  console.log(data)
  return (
    <div className="pays">
      <select
            onChange={(e) => setSelectRegion(e.target.value)}
            >
            {continent.map((item, index) => (
            <option key={index}
            value={item}>
            {item}
          </option>
        ))}
      </select>
      <ul>
        {data
          .filter((country) => !data ? (""): (country.region.includes(selectRegion)))
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};
export default Country;
