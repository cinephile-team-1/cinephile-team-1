import "./App.scss";
// 1. Importamos tu Landing Page (Home)
import Home from "./pages/Home";
// 2. Importamos los componentes que están haciendo las demás chicas
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
