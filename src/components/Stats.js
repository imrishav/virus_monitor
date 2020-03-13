import React from "react";
import styled from "styled-components";
import useStats from "../utils/useStats";

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="row">
      <div className="col-6 col-md-4">
        <div
          className="card text-white bg-warning mb-3"
          style={{ maxWidth: "18rem", textAlign: "center" }}
        >
          <div className="card-header" style={{ color: "black" }}>
            Confirmed Cases
          </div>
          <div className="card-body">
            <h2
              className="card-text"
              style={{ textAlign: "center", color: "black" }}
            >
              {stats.confirmed.value}
            </h2>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-4">
        <div
          className="card text-white bg-danger mb-3"
          style={{ maxWidth: "18rem", textAlign: "center" }}
        >
          <div className="card-header">Deaths :</div>
          <div className="card-body">
            <h2 className="card-text" style={{ textAlign: "center" }}>
              {stats.deaths.value}
            </h2>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-4">
        {" "}
        <div
          className="card text-white bg-primary mb-3"
          style={{ maxWidth: "18rem", textAlign: "center" }}
        >
          <div className="card-header">Recovered</div>
          <div className="card-body">
            <h2 className="card-text" style={{ textAlign: "center" }}>
              {stats.recovered.value}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
