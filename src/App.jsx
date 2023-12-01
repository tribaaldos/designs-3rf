import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Materials from "./pages/M/Materials";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/materials" element={<Materials />}>
            Materials
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
