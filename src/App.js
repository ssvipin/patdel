import "./App.css";
import Footer from "./components/Footer";
import Index from "./components/HomePage/Index";
import HomePageSlider from "./components/HomePageSlider";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/loginflow/Login";
import Signup from "./components/loginflow/Signup";
import NotFound from "./components/NotFound";
import UserDashboard from "./components/loginflow/UserDashboard";
import SavedRecipe from "./components/Chef/SavedRecipe";
import { useState } from "react";
function App() {
  const [updateCounter, setUpdateCounter] = useState(0);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Navbar updateCounter={updateCounter} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Index
                setUpdateCounter={setUpdateCounter}
                updateCounter={updateCounter}
              />
            }
          ></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<UserDashboard />}></Route>
          <Route path="/favorite" element={<SavedRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
      <header className=""></header>
    </div>
  );
}

export default App;
