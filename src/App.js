import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./Components";

import styles from "./App.module.css";
import { fetchdata } from "./api";
import coronaImage from "./Images/image.png";
export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  handleCountryChnage = async (country) => {
    const fetchedData = await fetchdata(country);
    this.setState({
      data: fetchedData,
      country: country,
    });
    console.log(fetchedData);
  };

  async componentDidMount() {
    const fetchedData = await fetchdata();
    console.log(fetchedData);
    this.setState({
      data: fetchedData,
    });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID_19" />
        <Cards data={data} />
        <CountryPicker handleCountryChnage={this.handleCountryChnage} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
