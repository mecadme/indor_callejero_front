import { BrowserRouter as Router } from "react-router-dom";
import ComingSoon from "./components/ComingSoon";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/main_page/MainContent";
import Footer from "./components/footer/Footer.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
