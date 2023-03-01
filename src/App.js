import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout";
import Pocetna from "./Pages/Pocetna";
import OApartmanu from "./Pages/OApartmanu";
import Cjenik from "./Pages/Cjenik";
import OMjestu from "./Pages/OMjestu";
import Kontakt from "./Pages/Kontakt";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pocetna />} />
        <Route path="/oapartmanu" element={<OApartmanu />} />
        <Route path="/cjenik" element={<Cjenik />} />
        <Route path="/omjestu" element={<OMjestu />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Route>
    </Routes>
  );
}

export default App;
