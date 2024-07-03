import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Shop from "./Pages/Shop";
import Purchases from "./components/purchases/Purchases";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Purchases />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
