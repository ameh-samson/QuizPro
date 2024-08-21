import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PWABadge from "./PWABadge.tsx";
import GrandLayout from "./layout/GrandLayout.tsx";
import Loading from "./screens/Loading.tsx";
import { Welcome } from "./screens/Welcome.tsx";
import { useProgressBar } from "./hooks/useProgressBar.ts";

function App() {
  const { isLoading } = useProgressBar();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GrandLayout />}>
            <Route
              index
              element={isLoading ? <Loading /> : <Navigate to="/welcome" />}
            />
            <Route path="/welcome" element={<Welcome />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <PWABadge />
    </>
  );
}

export default App;
