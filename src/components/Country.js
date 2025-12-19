import axios from "axios";
import Card from "./Card";
import React, { useState, useEffect } from "react";

const Country = () => {
  const [data, setData] = useState([]);
  const [selectRegion, setSelectRegion] = useState("");
  const [loading, setLoading] = useState(false);

  const continent = [
    { value: "", label: "Tous les continents 🌍" },
    { value: "europe", label: "Europe 🇪🇺" },
    { value: "africa", label: "Afrique 🌍" },
    { value: "americas", label: "Amériques 🌎" },
    { value: "asia", label: "Asie 🌏" },
    { value: "oceania", label: "Océanie 🏝️" },
  ];

  useEffect(() => {
    const loadCountries = async () => {
      setLoading(true);
      try {
        if (!selectRegion) {
          const regions = ['europe', 'africa', 'americas', 'asia', 'oceania'];
          const promises = regions.map(region =>
            axios.get(`https://restcountries.com/v3.1/region/${region}`)
          );
          const results = await Promise.all(promises);
          const allCountries = results.flatMap(res => res.data);
          console.log("Tous les pays chargés:", allCountries.length);
          setData(allCountries);
        } else {
          const res = await axios.get(`https://restcountries.com/v3.1/region/${selectRegion}`);
          console.log(`Pays de ${selectRegion}:`, res.data.length);
          setData(res.data);
        }
        setLoading(false);
      } catch (err) {
        console.error("Erreur lors du chargement des pays:", err);
        setLoading(false);
      }
    };

    loadCountries();
  }, [selectRegion]);

  const filteredCountries = data.sort((a, b) => {
    const nameA = a.translations?.fra?.common || a.name?.common || '';
    const nameB = b.translations?.fra?.common || b.name?.common || '';
    return nameA.localeCompare(nameB);
  });

  return (
    <div className="pays">
      <div className="selector-container">
        <select
          onChange={(e) => setSelectRegion(e.target.value)}
          value={selectRegion}
        >
          {continent.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <div className="countries-count">
          {filteredCountries.length} pays{filteredCountries.length > 1 ? '' : ''}
        </div>
      </div>

      {loading ? (
        <div className="loading">Chargement des pays...</div>
      ) : (
        <ul>
          {filteredCountries.map((country, index) => (
            <Card key={country.cca3 || index} country={country} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Country;
