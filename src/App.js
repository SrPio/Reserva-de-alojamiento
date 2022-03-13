import "./styles.css";
import Header from "./components/header/Header";
import Filters from "./components/filters/Filters";
import Cards, { Mensaje } from "./components/cards/Cards";
import { hotelsData } from "./statics/data";
import { useState } from "react";
//formato Date String

export const formatoFecha = (fecha) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(fecha + "T00:00:00").toLocaleDateString("es-CO", options);
};

export default function App() {
  //Funciones de filtros

  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");

  const [tamanio, setTamanio] = useState("Todos");
  const [pais, setPais] = useState("Todos");
  const [precio, setPrecio] = useState("Todos");

  const nuevaListaHoteles = () => {
    let nuevaLista = hotelsData
      .filter((hotel) => {
        if (!fechaDesde || !fechaHasta) {
          return hotel;
        }
        return (
          hotel.availabilityFrom > new Date(fechaDesde).getTime() &&
          hotel.availabilityTo < new Date(fechaHasta).getTime()
        );
      })
      .filter((hotel) => {
        if (tamanio === "pequeño") {
          return hotel.rooms <= 10;
        } else if (tamanio === "mediano") {
          return hotel.rooms > 10 && hotel.rooms <= 20;
        } else if (tamanio === "grande") {
          return hotel.rooms > 20;
        }
        return hotel;
      })
      .filter((hotel) => {
        if (pais !== "Todos") {
          return hotel.country === pais;
        }
        return hotel;
      })
      .filter((hotel) => {
        if (precio !== "Todos") {
          return hotel.price === Number(precio);
        }
        return hotel;
      });
    return nuevaLista;
  };
  const listaFiltrada = nuevaListaHoteles();

  //fecha formateada - date string
  let DS_desde = formatoFecha(fechaDesde);
  let DS_hasta = formatoFecha(fechaHasta);

  return (
    <div className="App">
      <Header
        pais={pais}
        precio={precio}
        tamanio={tamanio}
        fechaDesde={fechaDesde}
        fechaHasta={fechaHasta}
        DS_desde={DS_desde}
        DS_hasta={DS_hasta}
      />
      <Filters
        fechaDesde={fechaDesde}
        setFechaDesde={setFechaDesde}
        fechaHasta={fechaHasta}
        setFechaHasta={setFechaHasta}
        tamanio={tamanio}
        setTamanio={setTamanio}
        pais={pais}
        setPais={setPais}
        precio={precio}
        setPrecio={setPrecio}
      />
      <Cards
        listaFiltrada={listaFiltrada}
        DS_desde={DS_desde}
        DS_hasta={DS_hasta}
      />
      {listaFiltrada.length !== 0 ? (
        <Cards listaFiltrada={listaFiltrada} />
      ) : (
        <Mensaje />
      )}
    </div>
  );
}
