import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./Components/Menu";
import Rodape from "Components/Rodape";
import PaginaPadrao from "Components/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mim" element={<SobreMim />} />
        </Route>

        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
