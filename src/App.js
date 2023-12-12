import "./App.css";
import Footer from "./components/Footer";
import Index from "./components/HomePage/Index";
import HomePageSlider from "./components/HomePageSlider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Index />
      <Footer />
      <header className=""></header>
    </div>
  );
}

export default App;
