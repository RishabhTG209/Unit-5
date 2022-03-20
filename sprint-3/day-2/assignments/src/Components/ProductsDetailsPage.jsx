import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";

export const ProductsDetailsPage = () => {
  const [product, setProduct] = useState({});
  const [found, setFound] = useState(true);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch(`http://localhost:3001/products/${id}`);
      let data = await res.json();
      console.log(data.name);
      if (data.name != undefined) {
        setProduct(data);
        setFound(true);
      } else {
        setFound(false);
      }

      // console.log(data.name);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(found);
  return (
    <div>
      {found === true ? (
        <div
          style={{
            display: "flex",
            paddingTop: "50px",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          {/* <h1>{id}</h1> */}
          {/* <img src={""} alt="" /> */}
          <div className="productDetails" style={{ padding: "20px" }}>
            <div>
              <h2 className="productName">{product.name}</h2>
              <h5 className="productPrice">Price : {product.price}</h5>
            </div>
            {/* <h5>Specifications : </h5> */}
            <div style={{ width: "700px", paddingLeft: "30px" }}>
              {/* Show Product specification here */}
            </div>
          </div>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
};
