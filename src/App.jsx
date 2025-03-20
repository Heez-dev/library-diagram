import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import Mermaid from "./pages/Mermaid";
import XYFlow from "./pages/XYFlow";

function App() {
  return (
    <div className="App p-10 overflow-auto h-screen">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/mermaid" element={<Mermaid />} />
          <Route path="/reactflow" element={<XYFlow />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
