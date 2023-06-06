import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MainComponent from "./components/MainComponent";
import Projects from "./components/Projects";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<MainComponent />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
