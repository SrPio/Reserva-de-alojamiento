import React from "react";
import styles from "./Card.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Card({ hotel }) {
  const reservar = () => {
    alert("Hotel reservado");
  };

  let DS_desde = hotel.availabilityFrom;
  let DS_hasta = hotel.availabilityTo;

  let organizarFecha = (fecha) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    let nuevaFecha = new Date(fecha).toLocaleDateString("es-CO", options);
    return nuevaFecha;
  };

  return (
    <div className={styles.card}>
      <img
        src={hotel.photo}
        className={styles.images}
        alt={`fotografia del hotel ${hotel.name}`}
      />
      <h3 className={styles.titulo}>{hotel.name}</h3>
      <h5 className={styles.subTitulo}>
        <FontAwesomeIcon className={styles.icon} icon={faMapMarkerAlt} />
        {hotel.country}
      </h5>
      <h6 className={styles.dscrpt}>{hotel.description}</h6>
      <h6 className={styles.fechas}>Desde el {organizarFecha(DS_desde)} </h6>
      <h6 className={styles.fechas}>Hasta el {organizarFecha(DS_hasta)}</h6>
      <div className={styles.contRooms}>
        <div className={styles.contBed}>
          <img className={styles.iconBed} src="../images/sleep.svg" alt="" />
        </div>
        <h6 className={styles.roomsprops}>{hotel.rooms} habitaciones.</h6>
      </div>
      <div className={styles.precio}>
        {Array.from({ length: hotel.price }).map((item, index) => {
          return <span key={index}>$</span>;
        })}
        {Array.from({ length: 4 - hotel.price }).map((item, index) => {
          return (
            <span key={index} className={styles.precioOpaco}>
              $
            </span>
          );
        })}
      </div>
      <button className={styles.btnReser} onClick={reservar}>
        Reservar
      </button>
    </div>
  );
}

export default Card;
