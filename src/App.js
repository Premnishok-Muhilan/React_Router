import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import All from "./components/All";
import FullStackDevelopment from "./components/FullStackDevelopment";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<All />} />
          <Route
            path="/FullStackDevelopment"
            element={<FullStackDevelopment />}
          />
          <Route path="/DataScience" element={<DataScience />} />
          <Route path="/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/Career" element={<Career />} />
        </Routes>
      </BrowserRouter>
      {/* <ButtonAppBar/> */}
    </div>
  );
}

export default App;
