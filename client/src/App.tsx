import Homepage from "./pages/Homepage";
import About from "./pages/About";
import SharedLayout from "./pages/SharedLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
