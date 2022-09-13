import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import RouteProtected from "./layout/RouteProyected";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import NewPassword from "./pages/NewPassword";
import ConfirmAccount from "./pages/ConfirmAccount";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";

import { AuthProvider } from "./context/AuthProvider";

// console.log(import.meta.env.VITE_BACKEND_URL)

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="forget-password/:token" element={<NewPassword />} />
            <Route path="confirm/:id" element={<ConfirmAccount />} />
          </Route>

          <Route path="/projects" element={<RouteProtected />}>
            <Route index element={<Projects />} />
            <Route path="create-project"  element={<NewProject />} />

          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
