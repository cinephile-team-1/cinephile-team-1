import "./App.scss";

import Home from "./pages/Home";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app-container">
      {/* El Header incluye el Navbar */}
      <Header />

      {/* HOME */}
      <main>
        <Home />
      </main>

      {/* El Footer  */}
      <Footer />
    </div>
  );
}

export default App;
