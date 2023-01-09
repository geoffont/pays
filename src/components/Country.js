import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Select from "react-select";

const Country = () => {
  const continent = [
    { value: "europe", label: "europe" },
    { value: "afrique", label: "afrique" },
    { value: "amerique", label: "amerique" },
    { value: "asie", label: "asie" },
    { value: "oceanie", label: "oceanie" },
  ];
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setdata(res.data));
  }, []);
  return (
    <div>
      
<select>
        <option>--Select--</option>
        <option>europe</option>
        <option>afrique</option>
        <option>amerique</option>
        <option>asie</option>
        <option>oceanie</option>
    </select>
      <h1>Countries</h1>
      <ul>
        {data.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Country;
