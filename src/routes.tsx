import { BrowserRouter, Route, Routes } from "react-router-dom";

/**
 * tamplate
 */

import Dashboard from "./components/template/dashboard";

/**
 * views
 */

import Product from "./pages/dashboard/product/views-product";

const { Add, Show, Update } = Product;

const App = () => {
  return (
    <Dashboard>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </Dashboard>
  );
};

export default App;
