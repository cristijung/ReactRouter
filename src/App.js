import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/SobreMim" element={<SobreMim />} />
        <Route path="*" element={<div>Erro 404 - Página não encontrada.</div>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
