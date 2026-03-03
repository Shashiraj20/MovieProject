import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favourite from "./Pages/Favourite";
import NavBar from "./components/NavBar";
import { Movieprovider } from "./Contexts/MovieContext";

function App() {
  return (
    <Movieprovider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>
    </Movieprovider>
  );
}

export default App;
