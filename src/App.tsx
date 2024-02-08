import { BrowserRouter, Route, Routes } from "react-router-dom";
import BundesLiga from "./pages/BundesLiga";
import Home from "./pages/Home";
import LaLiga from "./pages/LaLiga";
import League1 from "./pages/League1";
import PremierLeague from "./pages/PremierLeague";
import SerieA from "./pages/SerieA";
import UefaChampionsLeague from "./pages/UefaChampionsLeague";
import AppLayout from "./ui/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>} >
      <Route path="/" element={<Home />} />
      <Route path="premier-league" element={<PremierLeague/>} />
      <Route path="la-liga" element={<LaLiga/>} />
      <Route path="bundesliga" element={<BundesLiga/>} />
      <Route path="serie-a" element={<SerieA/>} />
      <Route path="league-1" element={<League1/>} />
      <Route path="uefa-champions-league" element={<UefaChampionsLeague/>} />
      </Route>
     
      
    </Routes>
    </BrowserRouter>
  )
}
