import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { ProductsDetailsPage } from "./Components/ProductsDetailsPage";
import { ProductsPage } from "./Components/ProductsPage";
import { NotFoundPage } from "./Components/NotFoundPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/products/:id"} element={<ProductsDetailsPage />} />
        <Route path={"/products"} element={<ProductsPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
