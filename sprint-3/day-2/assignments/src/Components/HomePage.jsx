import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const HomePage = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get(`http://localhost:3001/products`).then((res) => {
      console.log(res.data);
      setArr([...res.data]);
      // console.log(arr);
    });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {arr.map((el) => {
          return (
            <Link to={`/products/${el.id}`} key={el.id}>
              {el.name}
            </Link>
          );
        })}
      </div>
    </>
  );
};
