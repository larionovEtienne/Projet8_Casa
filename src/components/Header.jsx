import { Link } from "react-router-dom";
import "./header.css";
import kImage from "../image/VectorK.png";
import aImage from "../image/house.png";
import sImage from "../image/VectorS.png";
import a2Image from "../image/VectorA.png";

function Header() {
  return (
    <header className="header">
      <span>
        {" "}
        <img src={kImage} alt="K" className="larger-letter" />
        <img src={aImage} alt="A" />
        <img src={sImage} alt="S" />
        <img src={a2Image} alt="A" />
      </span>{" "}
      <span>
        <Link to="/" className="nav-link">
          Accueil
        </Link>
        <span className="space"> </span>
        <a href="#" className="nav-link">
          A Propos
        </a>
      </span>
    </header>
  );
}

export default Header;
