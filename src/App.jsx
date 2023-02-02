import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
// import Home from "./pages/Home";
const Home = React.lazy(() => import("./pages/Home"));
const Location = React.lazy(() => import("./pages/Location"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Suspense>
  );
}

export default App;
