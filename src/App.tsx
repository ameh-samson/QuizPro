import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PWABadge from "./PWABadge.tsx";
import GrandLayout from "./layout/GrandLayout.tsx";
import Loading from "./screens/Loading.tsx";
import { Welcome } from "./screens/Welcome.tsx";
import { useProgressBar } from "./hooks/useProgressBar.ts";
import QuizSelection from "./screens/QuizSelection.tsx";
import { useState } from "react";

function App() {
  const { isLoading } = useProgressBar();

  const [userName, setUserName] = useState<string | null>(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GrandLayout />}>
            <Route
              index
              element={isLoading ? <Loading /> : <Navigate to="/welcome" />}
            />
            <Route
              path="/welcome"
              element={
                userName ? (
                  <Navigate to="/quizzes" />
                ) : (
                  <Welcome setUserName={setUserName} />
                )
              }
            />
            <Route
              path="/quizzes"
              element={<QuizSelection userName={userName} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <PWABadge />
    </>
  );
}

export default App;
