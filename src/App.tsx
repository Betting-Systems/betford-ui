import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>} >
      <Route path="/" element={<Home />} />
      </Route>
     
      
    </Routes>
    </BrowserRouter>
  )
}
