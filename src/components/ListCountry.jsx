import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { API_KEY, URL } from "../config/env";

const supabase = createClient(URL, API_KEY);

export default function ListCountry() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const { data, error } = await supabase.from("countries").select("*");
    if (error) {
      console.log(error);
    } else {
      setCountries(data);
      console.log(countries);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <ul>
        {countries.map((country) => {
          return <li key={country.id}>{country.name}</li>;
        })}
      </ul>
    </>
  );
}
