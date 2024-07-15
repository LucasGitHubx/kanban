import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/kanban/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/kanban/login" element={<LoginPage />} />
        <Route path="/kanban/logout" element={<LogoutPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}
