import "./App.scss";
import Home from "./pages/Home.jsx";
import Header from "./components/header/Header.jsx";
import Navbar from "./components/header/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
