import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ShopPages from "./Pages/ShopPage";
import PurchasesPage from "./Pages/PurchasesPage";
import Category from "./components/category/Category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShopPages />} />
          <Route path="/purchases" element={<PurchasesPage />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
