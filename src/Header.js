// import react from "react";
import "./styles.css";
import img1 from "./images/TrollFace.jpg";
export default function Header() {
  return (
    <header className="header">
      <img src={img1} className="header-img" />
      <h1 className="header-title"> Meme Generator</h1>
      <h4 className="header-project">React Project </h4>
    </header>
  );
}
