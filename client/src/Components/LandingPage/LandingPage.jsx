import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.contenedor}>
      <img src="wallpaperbola.jpeg" />
      <Link to="/page">
        <div className={style.divimg}>
          <img
            src="pokeworld.png"
            className={style.pokeworld}
            alt="pokeworld"
          />
        </div>
        <span className={style.home}>Home</span>
      </Link>
    </div>
  );
}
