import React from "react";
import style from "./Filters.module.css";

export default function Filtros() {
  return (
    <div className={style.container}>
      <h2>Filtrá tu busqueda</h2>
      <section>
        <header>Tipos</header>
        <select>
          <option placeholder="Elegí"></option>
          <option>type 1</option>
          <option>type 2</option>
          <option>type 3</option>
          <option>type 4</option>
        </select>
      </section>
      <section>
        <header>Orden</header>
        <select>
          <option placeholder="Elegí"></option>
          <option>A-Z</option>
          <option>Z-A</option>
          <option>Mas fuerte</option>
          <option>Mas débil</option>
        </select>
      </section>
      <section>
        <header>Sección </header>
        <select>
          <option placeholder="Elegí"></option>
          <option>Existente</option>
          <option>Creado</option>
        </select>
      </section>
    </div>
  );
}
