import { BrowserRouter, Routes, Route } from "react-router-dom";
import PWABadge from "./PWABadge.tsx";
import GrandLayout from "./layout/GrandLayout.tsx";
import Loading from "./screens/Loading.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GrandLayout />}>
            <Route index element={<Loading />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <PWABadge />
    </>
  );
}

export default App;
