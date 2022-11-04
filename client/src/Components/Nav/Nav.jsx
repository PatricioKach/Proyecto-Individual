import React from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav() {
  return (
    <div>
      <nav>
        <header>
          <h1>
            <div className={style.divimg}>
              <Link to={"/page"}>
                <img
                  src="pokeworld.png"
                  className={style.pokeworld}
                  alt="bola"
                />
              </Link>
            </div>
          </h1>
        </header>
        <img src="pokebola.png" alt="pokeicon" height={100}></img>
        <form className={style.formu}>
          <input
            type="text"
            placeholder="Busca tu pokemon"
            class="form-control"
          ></input>
          <input type="submit" value="OK"></input>
        </form>
      </nav>
    </div>
  );
}
