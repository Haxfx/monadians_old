import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeV1 from "./pages/homeV1";
import MintPageTwo from "./pages/mint-2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeV1 />} />
        <Route path="/mint-2" element={<MintPageTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
