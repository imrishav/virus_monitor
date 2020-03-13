import React, { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "./Stats";

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  console.log(countries);
  const [selectedCountry, setSelectedCountry] = useState("IND");
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    // <div>
    //   <h2>Currently Showing {selectedCountry}</h2>
    //   <div className="input-group mb-3">
    //     <div className="input-group-prepend">
    //       <label className="input-group-text" htmlFor="inputGroupSelect01">
    //         Country
    //       </label>
    //     </div>
    //     <select
    //       className="custom-select"
    //       onChange={e => {
    //         setSelectedCountry(e.target.value);
    //       }}
    //     >
    //       {Object.entries(countries.countries).map(([country, code]) => (
    //         <option
    //           selected={selectedCountry === countries.iso3[code]}
    //           key={code}
    //           value={countries.iso3[code]}
    //         >
    //           {country}
    //         </option>
    //       ))}
    //     </select>
    //   </div>

    //   <Stats
    //     url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
    //   ></Stats>
    // </div>
    <>
      <div className="row">
        <div className="col-12 col-md-12">
          <h2>
            <span style={{ color: "white" }}>Currently Showing </span>
            <span
              style={{
                backgroundColor: "green",
                letterSpacing: 2,
                color: "white"
              }}
            >
              {selectedCountry}
            </span>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          <div
            className="card text-white border-success mb-3"
            style={{ textAlign: "center" }}
          >
            <div className="input-group">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  Country
                </label>
              </div>
              <select
                className="custom-select"
                onChange={e => {
                  setSelectedCountry(e.target.value);
                }}
              >
                {Object.entries(countries.countries).map(([country, code]) => (
                  <option
                    selected={selectedCountry === countries.iso3[code]}
                    key={code}
                    value={countries.iso3[code]}
                  >
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </>
  );
}
