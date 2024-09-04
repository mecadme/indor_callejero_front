import "../css/ComingSoon.css"; // Importa el archivo de estilos CSS
import logo from "../assets/indor_callejero_logo.png"; // Importa tu logo
import CountdownTimer from "./CountdownTimer";

const ComingSoon: React.FC = () => {
  return (
    <div className="coming-soon-container">
      <a href="https://www.facebook.com/IndorCallejeroAzogues" target="_blank">
        <img src={logo} alt="Logo de Indor Callejero" className="logo" />
      </a>
      <p className="coming-soon-text">Click en el logo para conocer más</p>
      <CountdownTimer />
    </div>
  );
};

export default ComingSoon;
