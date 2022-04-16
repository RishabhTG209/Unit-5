import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CityTable } from "../Table/citytable";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../../Redux/action";

export const Home = () => {
  const [city, setCity] = useState([]);
  useEffect(() => 
    getData(), 
  []);

  const dispatch = useDispatch();
  const cities = useSelector((store) => store.city);

  const getData = () => {
    axios.get(`http://localhost:3125/city`).then((res) => {
      let final = dispatch(addCity(res.data));
      setCity([...final.payload]);
    });
  };

  const deleteCity=(id)=>{
    axios.delete(`http://localhost:3125/city/${id}`).then(() => getData());
  }

  // SORTING
  const sortAscCountry = () => {
    let test = cities.sort(AscCountry);
    let change = dispatch(addCity(test));
    setCity([...change.payload]);
  };

  function AscCountry(a, b) {
    if (a.country < b.country) {
      return -1;
    }
    if (a.country > b.country) {
      return 1;
    }
    return 0;
  }

  //country dsc

  const sortDscCountry = () => {
    let test = cities.sort(DscCountry);
    let change = dispatch(addCity(test));
    setCity([...change.payload]);
  };

  function DscCountry(a, b) {
    if (a.country > b.country) {
      return -1;
    }
    if (a.country < b.country) {
      return 1;
    }
    return 0;
  }

  //High

  const high = () => {
    let test = cities.sort(PopulationHigh);
    let change = dispatch(addCity(test));
    setCity([...change.payload]);
  };

  function PopulationHigh(a, b) {
    if (+a.population > +b.population) {
      return -1;
    }
    if (+a.population < +b.population) {
      return 1;
    }
    return 0;
  }

  const low = () => {
    let test = cities.sort(PopulationLow);
    let change = dispatch(addCity(test));
    setCity([...change.payload]);
  };

  function PopulationLow(a, b) {
    if (+a.population < +b.population) {
      return -1;
    }
    if (+a.population > +b.population) {
      return 1;
    }
    return 0;
  }




  const MainDiv = styled.div`
    margin: auto;
    text-align: center;
    width: 100%;
    .subDiv {
      width: 100%;
      justify-content: center;
      margin: auto;
    }
    table {
      border: 2px solid tomato;
      margin: auto;
      width: 60%;
      /* padding: 10px; */
    }
    th {
      border: 2px solid orange;
      padding: 10px;
      font-weight: bold;
    }
    td{
      border: 2px solid black;
      color : purple;
    }
  `;
  return (
    <MainDiv>
      <div className="subDiv">
        
        <div>
          <Link to={`/add-country`}>Add Country</Link>
          <br/>
          <Link to={`/add-city`}>Add City</Link>
        </div>
        <div>
        <br />
        <div className="sortingButtons">
          <button className="sortByCounty" onClick={() => sortAscCountry()}>
            Country Asc
          </button>
          <button className="sortByCounty" onClick={() => sortDscCountry()}>
            Country Desc
          </button>
          <button className="sortByCounty" onClick={() => high()}>
            Population High to low
          </button>
          <button className="sortByCounty" onClick={() => low()}>
            Population Low to high
          </button>
        </div>
        <br />

          {/*<input
            className="searchAddress"
            type="text"
            placeholder="Search Address"
            onChange={({ target }) => {
              let results = cities.filter((el) => {
                if (el.country == target.value) {
                  return el;
                }
              });
              setTimeout(() => {
                if (results.length != 0) {
                  dispatch(addCity(results));
                }
              }, 1000);
            }}
          />*/}
        </div>
        <br/>
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
            <CityTable key={el.id} deleteCity={deleteCity} data={el} />
          ))}
        </table>
      </div>
    </MainDiv>
  );
};