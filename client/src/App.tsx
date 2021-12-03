import React, { useState } from "react";
import logo from "./logo.svg";
import MapComponent from "./components/MapComponent";
import "./App.css";
import { Formik, Field, Form } from "formik";
import apiService from "./services/apiService";

function App() {
  const [breweryInformation, setBreweryInformation] = useState<any>();

  const getCityData = async (city: string) => {
    const cityData = await apiService.getByCity(city);
    console.log(cityData);
    setBreweryInformation(cityData);
  };

  return (
    <div className="App">
      <h1>Let's find some beer</h1>
      <div>
        <h1>I am the city form</h1>
        <Formik
          validateOnChange
          initialValues={{ city: "" }}
          onSubmit={(values) => {
            getCityData(values.city);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="city">Enter your chosen city</label>
              <Field id="city" name="city" placeholder="city" />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
        <MapComponent data={breweryInformation} />
      </div>
    </div>
  );
}

export default App;
