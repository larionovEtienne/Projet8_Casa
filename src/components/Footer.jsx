// Footer.jsx
import React from "react";
import "./footer.css";
import Imagek from "../image/wk.png";
import Imageh from "../image/whouse.png";
import Images from "../image/ws.png";
import Imagea from "../image/wa.png";
const Footer = () => {
  return (
    <footer>
      <span>
        <img src={Imagek} alt="K" />
        <img src={Imageh} alt="A" />
        <img src={Images} alt="S" />
        <img src={Imagea} alt="A" />
      </span>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
