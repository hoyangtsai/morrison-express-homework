import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import Checkbox from "./Checkbox";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/layout1" element={<Layout1 />}></Route>
        <Route path="/layout2" element={<Layout2 />}></Route>
        <Route path="/checkbox" element={<Checkbox />}></Route>
      </Routes>
    </Router>
  );
}
