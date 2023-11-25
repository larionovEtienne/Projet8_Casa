// NotFoundPage.jsx
import React from "react";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import NotFoundSvg from "../image/404.svg";
const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="error-container">
        <img src={NotFoundSvg} alt="404 Not Found" />
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <p>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </p>
      </div>
    </>
  );
};
export default NotFoundPage;
