import React from "react";
import { Route, Router, Routes } from "react-router";
import Layout from "./Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminPage from "./pages/Home/AdminPage";
import ProtectedRoute from "./pages/ProtectedRoutes";
import Homes from "./pages/Home/Homes";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Homes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default Routers;
