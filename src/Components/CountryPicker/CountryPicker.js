import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchcountries } from "../../api";

const CountryPicker = ({ handleCountryChnage }) => {
  const [fecthedCountries, setFecthedCountries] = useState([]);
  useEffect(() => {
    const fecthAPI = async () => {
      setFecthedCountries(await fetchcountries());
    };
    fecthAPI();
  }, [setFecthedCountries]);
  console.log(fecthedCountries);
  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChnage(e.target.value)}
        >
          <option value=""> Global</option>
          {fecthedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};
export default CountryPicker;
