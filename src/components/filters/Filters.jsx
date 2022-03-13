import styles from "./Filters.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Filters({
  fechaDesde,
  setFechaDesde,
  fechaHasta,
  setFechaHasta,
  tamanio,
  setTamanio,
  pais,
  setPais,
  precio,
  setPrecio
}) {
  const hotelesPorPais = (e) => {
    const paisSeleccionado = e.target.value;
    setPais(paisSeleccionado);
    /* console.log(paisSeleccionado); */
  };

  const hotelesPorPrecio = (e) => {
    const pecioSeleccionado = e.target.value;
    setPrecio(pecioSeleccionado);
  };

  const hotelesPorTamanio = (e) => {
    const tamanioSeleccionado = e.target.value;
    setTamanio(tamanioSeleccionado);
  };

  const fechaSeleccionadaDesde = (e) => {
    const fechaSeleccionada = e.target.value;
    setFechaDesde(fechaSeleccionada);
  };

  const fechaSeleccionadaHasta = (e) => {
    const fechaSeleccionada = e.target.value;
    setFechaHasta(fechaSeleccionada);
  };

  let limpiarFiltros = () => {
    setTamanio("Todos");
    setPais("Todos");
    setPrecio("Todos");
    setFechaDesde("");
    setFechaHasta("");
  };

  return (
    <div>
      <div className={styles.contenedor}>
        <div className={styles.inputs_y_labels}>
          <input
            value={fechaDesde}
            onChange={fechaSeleccionadaDesde}
            type="date"
            id={styles.date2}
          />
          <label htmlFor="">Fecha desde</label>
        </div>

        <div className={styles.inputs_y_labels}>
          <input
            value={fechaHasta}
            onChange={fechaSeleccionadaHasta}
            type="date"
            id={styles.date2}
          />
          <label htmlFor="">Fecha hasta</label>
        </div>
        <div className={styles.inputs_y_labels}>
          <select
            value={pais}
            name=""
            id={styles.pais}
            onChange={hotelesPorPais}
          >
            <option value="Todos">Todos</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
          </select>
          <label htmlFor="">País</label>
        </div>
        <div className={styles.inputs_y_labels}>
          <select
            value={tamanio}
            name=""
            id={styles.tamaño}
            onChange={hotelesPorTamanio}
          >
            <option value="Todos">Todos</option>
            <option value="pequeño">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>
          <label htmlFor="">Tamaño</label>
        </div>
        <div className={styles.inputs_y_labels}>
          <select
            value={precio}
            name=""
            id={styles.precio}
            onChange={hotelesPorPrecio}
          >
            <option value="Todos">Todos</option>
            <option value="1">$ </option>
            <option value="2">$$ </option>
            <option value="3">$$$ </option>
            <option value="4">$$$$ </option>
          </select>
          <label htmlFor="">Precio</label>
        </div>
        <button className={styles.botonLimp} onClick={limpiarFiltros}>
          <FontAwesomeIcon className={styles.icon} icon={faTrash} />
          Limpiar
        </button>
      </div>
    </div>
  );
}

export default Filters;
