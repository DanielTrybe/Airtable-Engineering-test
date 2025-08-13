import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import { Layout } from "../components/layout";

const Home = lazy(() => import("../pages/Home"));

export function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <RouterRoutes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
          </Route>
        </RouterRoutes>
      </Suspense>
    </BrowserRouter>
  );
}
