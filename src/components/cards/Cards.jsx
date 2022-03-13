import React from "react";
import styles from "./Cards.module.css";
import Card from "../card/Card";

function Cards({ listaFiltrada }) {
  return (
    <main className={styles.main}>
      {listaFiltrada.map((hotel) => {
        return <Card key={hotel.slug} hotel={hotel} />;
      })}
    </main>
  );
}

export function Mensaje() {
  return (
    <div className={styles.msgContainer}>
      <h1>No se encontraron resultados. :(</h1>
      <img src="./images/Questions-amico.svg" alt="" />
    </div>
  );
}

export default Cards;
