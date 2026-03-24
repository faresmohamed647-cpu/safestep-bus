import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import LiveTracking from "./pages/LiveTracking";
import Dashboard from "./pages/Dashboard";
import DriversManagement from "./pages/DriversManagement";
import StudentsManagement from "./pages/StudentsManagement";
import ParentsPortal from "./pages/ParentsPortal";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FAQ from "./pages/FAQ";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "features", Component: Features },
      { path: "how-it-works", Component: HowItWorks },
      { path: "tracking", Component: LiveTracking },
      { path: "dashboard", Component: Dashboard },
      { path: "drivers", Component: DriversManagement },
      { path: "students", Component: StudentsManagement },
      { path: "parents", Component: ParentsPortal },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "faq", Component: FAQ },
    ],
  },
]);
