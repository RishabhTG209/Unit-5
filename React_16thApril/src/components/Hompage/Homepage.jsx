import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CityTable } from "../Table/citytable";

export const Home = () => {
  const [city, setCity] = useState([]);
  useEffect(() => getData(), []);

  const getData = () => {
    axios.get(`http://localhost:8080/city`).then((res) => {
      console.log("res data", res.data);
      setCity([...res.data]);
    });
  };

  const MainDiv = styled.div`
    margin: auto;
    text-align: center;
    width: 90%;
    .subDiv {
      width: 90%;
      justify-content: center;
      margin: auto;
    }
    table {
      border: 2px solid black;
      margin: auto;
      /* padding: 10px; */
    }
    th {
      border: 2px solid black;
      padding: 10px;
      fontWeight: bold;
    }
    td {
      border: 2px solid red;
    }
  `;
  return (
    <MainDiv>
      <div className="subDiv">
        <h1>Data</h1>
        <table>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {city.map((el) => (
            <CityTable key={el.id} data={el} />
          ))}
        </table>
      </div>
    </MainDiv>
  );
};