import React from "react";
import styles from "./Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";

function Header({
  pais,
  precio,
  tamanio,
  fechaDesde,
  fechaHasta,
  DS_desde,
  DS_hasta
}) {
  let mostrarPais = (pais) => {
    if (pais === "Todos") {
      return "En todos los paises";
    } else return `En ${pais}`;
  };

  let mostrarPrecio = (precio) => {
    if (precio === "Todos") {
      return "De todos los precios";
    } else if (precio === "1") {
      return `Hoteles tipo económico`;
    } else if (precio === "2") {
      return `Hoteles tipo confort`;
    } else if (precio === "3") {
      return `Hoteles tipo lujos`;
    } else if (precio === "4") {
      return `Hoteles tipo magnífico`;
    }
  };

  let mostrarTamanio = (tamanio) => {
    if (tamanio === "Todos") {
      return "De todos los tamaños";
    } else return `De tamaño  ${tamanio}`;
  };

  return (
    <div className={styles.headerProps}>
      <div className={styles.logo}>
        <h1 className={styles.titulo}>
          Hotelair
          <img
            className={styles.rotateCenter}
            src="../images/direct.svg"
            alt=""
          />{" "}
        </h1>
      </div>
      <div className={styles.selecciones}>
        <div className={styles.selecciones_icons}>
          <FontAwesomeIcon className={styles.icon} icon={faMapMarkerAlt} />
          <FontAwesomeIcon className={styles.icon} icon={faDollarSign} />
          <FontAwesomeIcon className={styles.icon} icon={faExpandArrowsAlt} />
        </div>
        <div className={styles.selecciones_text}>
          <h4>{mostrarPais(pais)}</h4>
          <h4>{mostrarPrecio(precio)}</h4>
          <h4>{mostrarTamanio(tamanio)}</h4>
        </div>
      </div>
      <div className={styles.fechas}>
        {fechaDesde ? (
          <h1>Desde el {DS_desde} -</h1>
        ) : (
          <h1>Selecciona una fecha inicial</h1>
        )}
        {fechaHasta ? <h1>Hasta el {DS_hasta}</h1> : <h1> </h1>}
      </div>
    </div>
  );
}

export default Header;
