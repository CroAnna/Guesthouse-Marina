import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout";
import Pocetna from "./Pages/Pocetna";
import OApartmanu from "./Pages/OApartmanu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pocetna />} />
        <Route path="/oapartmanu" element={<OApartmanu />} />
      </Route>
    </Routes>
  );
}

export default App;
