import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/AuthProvider";

import { Patients, Patient, Reports, Report, Login, NotFound } from "./pages";

const root = createRoot(document.getElementById("root") as HTMLElement);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <nav>
            <Link to="/patients" style={{ margin: 3 }}>
              Patients
            </Link>
            <Link to="/reports" style={{ margin: 3 }}>
              Reports
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Navigate to="/patients" replace />} />
            <Route
              path="/patients"
              element={<ProtectedRoute children={<Patients />} />}
            />
            <Route
              path="/patients/:id"
              element={<ProtectedRoute children={<Patient />} />}
            />
            <Route path="/reports" element={<Reports />} />
            <Route path="/reports/:id" element={<Report />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
