import "./App.css";
import Desplegable from "./components/Desplegable";
import Fade from "react-reveal/Fade";

const SERVICIOS_MARKETING = [
  {
    key: 1,
    id: "marketing-1",
    titulo: "Social Media",
    texto:
      "Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Etiam suscipit auctor cursus 1.",
  },
  {
    key: 2,
    id: "marketing-2",
    titulo: "Branding",
    texto:
      "Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Etiam suscipit auctor cursus 2.",
  },
  {
    key: 3,
    id: "marketing-3",
    titulo: "Copywriting",
    texto:
      "Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Etiam suscipit auctor cursus 2.",
  },
  {
    key: 4,
    id: "marketing-4",
    titulo: "Google Ads / Facebook Ads",
    texto:
      "Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Etiam suscipit auctor cursus 2.",
  },
  {
    key: 5,
    id: "marketing-5",
    titulo: "Estrategias Digitales",
    texto:
      "Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Etiam suscipit auctor cursus 2.",
  },
  {
    key: 6,
    id: "marketing-6",
    titulo: "Consultoría",
    texto:
      "Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Etiam suscipit auctor cursus 2.",
  },
];
const SERVICIOS_AUDIOVISUAL = [
  {
    key: 1,
    id: "audiovisual-1",
    titulo: "Video 360° y Dron",
    texto:
      "Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Etiam suscipit auctor cursus 1.",
  },
  {
    key: 2,
    id: "audiovisual-2",
    titulo: "Fotografía de Producto",
    texto:
      "Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Etiam suscipit auctor cursus 2.",
  },
];
const SERVICIOS_DISENO = [
  {
    key: 1,
    id: "diseno-1",
    titulo: "Diseño de sitios web profesionales",
    texto:
      "Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Etiam suscipit auctor cursus 1.",
  },
  {
    key: 2,
    id: "diseno-2",
    titulo: "Desarrollo de Tiendas en línea (e - Commerce)",
    texto:
      "Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Etiam suscipit auctor cursus 2.",
  },
  {
    key: 3,
    id: "diseno-3",
    titulo: "Construcción de Landing Pages",
    texto:
      "Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Etiam suscipit auctor cursus 2.",
  },
];

function App() {
  const goToServicios = () => {
    const element = document.getElementById("servicios");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const goToProyectos = () => {
    const element = document.getElementById("proyectos");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const goToNosotros = () => {
    const element = document.getElementById("nosotros");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const goToContacto = () => {
    const element = document.getElementById("contacto");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="menu menu-desktop">
        <div className="left">
          <div className="logo">
            <img src="img/logo.png" alt="img" />
          </div>
        </div>
        <div className="right">
          <div onClick={goToServicios}>Servicios</div>
          <div onClick={goToProyectos}>Proyectos</div>
          <div onClick={goToNosotros}>Nosotros</div>
          <div onClick={goToContacto}>Contacto</div>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-globe2"
              viewBox="0 0 16 16"
            >
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="menu menu-mobile">
        <div className="left">
          <div className="logo">
            <img src="img/logo.png" alt="img" />
          </div>
        </div>{" "}
        <div className="right">
          {" "}
          <div className="hamburguesa">
            {" "}
            <div className="linea"></div> <div className="linea"></div>
            <div className="linea"></div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <Fade left>
            <div className="texto">
              Agencia 360° especializada en marketing, contenido y diseño
              digital
            </div>
          </Fade>
          <Fade left>
            <div className="texto-2">
              Nuestro objetivo es ofrecer soluciones<br></br>
              tangibles que reflejen un retorno de<br></br>
              inversión a corto plazo.
            </div>
          </Fade>
          <div className="boton">
            <Fade right>
              <button onClick={goToContacto}>CONTÁCTANOS</button>
            </Fade>
          </div>
        </div>
      </div>
      <div className="servicios" id="servicios">
        <div className="titulo">
          <Fade right>
            <div className="container">SERVICIOS</div>
          </Fade>
        </div>
        <div className="contenido">
          <div className="container">
            <div className="servicio">
              <div className="izquierda">
                <Fade right>
                  <div className="nombre">Marketing Digital</div>
                  <div className="boton-2">
                    <button onClick={goToContacto}>CONTÁCTANOS</button>
                  </div>
                </Fade>
              </div>
              <div className="derecha">
                <Fade right>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua.
                    Etiam suscipit auctor cursus. Sed tempus elit vel dui
                    scelerisque dignissim. Aenean ut urna et lorem vestibulum
                    dignissim. Suspendisse pretium purus feugiat, posuere augue
                    in, condimentum justo. Integer imperdiet nunc condimentum
                    consequat consequat.
                  </p>
                  <p>
                    <b>Impulsamos tu negocio a través de:</b>
                  </p>
                  <div className="desplegables">
                    <Fade left>
                      {SERVICIOS_MARKETING.map((servicio) => (
                        <Desplegable
                          key={servicio.key}
                          id={servicio.id}
                          titulo={servicio.titulo}
                          texto={servicio.texto}
                        />
                      ))}
                    </Fade>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="servicio">
              <Fade left>
                <div className="izquierda">
                  <div className="nombre">Producción Audiovisual</div>
                  <div className="boton-2">
                    <button onClick={goToContacto}>CONTÁCTANOS</button>
                  </div>
                </div>
                <div className="derecha">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua.
                    Etiam suscipit auctor cursus. Sed tempus elit vel dui
                    scelerisque dignissim. Aenean ut urna et lorem vestibulum
                    dignissim. Suspendisse pretium purus feugiat, posuere augue
                    in, condimentum justo. Integer imperdiet nunc condimentum
                    consequat consequat.
                  </p>
                  <p>
                    <b>Impulsamos tu negocio a través de:</b>
                  </p>
                  <div className="desplegables">
                    <Fade left>
                      {SERVICIOS_AUDIOVISUAL.map((servicio) => (
                        <Desplegable
                          key={servicio.key}
                          id={servicio.id}
                          titulo={servicio.titulo}
                          texto={servicio.texto}
                        />
                      ))}
                    </Fade>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="servicio">
              <Fade right>
                <div className="izquierda">
                  <div className="nombre">
                    Diseño y Desarrollo Web / E-Commerce
                  </div>
                  <div className="boton-2">
                    <button onClick={goToContacto}>CONTÁCTANOS</button>
                  </div>
                </div>

                <div className="derecha">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua.
                    Etiam suscipit auctor cursus. Sed tempus elit vel dui
                    scelerisque dignissim. Aenean ut urna et lorem vestibulum
                    dignissim. Suspendisse pretium purus feugiat, posuere augue
                    in, condimentum justo. Integer imperdiet nunc condimentum
                    consequat consequat.
                  </p>
                  <p>
                    <b>Impulsamos tu negocio a través de:</b>
                  </p>
                  <div className="desplegables">
                    <Fade right>
                      {SERVICIOS_DISENO.map((servicio) => (
                        <Desplegable
                          key={servicio.key}
                          id={servicio.id}
                          titulo={servicio.titulo}
                          texto={servicio.texto}
                        />
                      ))}
                    </Fade>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="paquetes">
        <div className="container">
          <div className="titulo">PAQUETES</div>
          <div className="paquetes-info">
            <Fade left>
              <div className="paquete">
                <div className="nombre">PAQUETE 1</div>
                <div className="precio">$ 10,000 MXN / mes</div>
                <div className="linea"></div>
                <div className="descripcion">
                  Lorem ipsum dolor sit amet consectetur. Lectus interdum lectus
                  facilisis arcu turpis tellus. Purus pulvinar gravida purus
                  nulla viverra vulputate cras gravida est.
                </div>
                <div className="caracteristicas">
                  <p>
                    <span className="icono">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        height="14px"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </span>
                    Item 1. Lorem ipsum dolor sit.
                  </p>
                  <p>
                    <span className="icono">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        height="14px"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </span>
                    Item 2. Lorem ipsum dolor sit.
                  </p>
                  <p>
                    <span className="icono">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        height="14px"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </span>
                    Item 3. Lorem ipsum dolor sit.
                  </p>
                  <p>
                    <span className="icono">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        height="14px"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </span>
                    Item 4. Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
            </Fade>
            <div className="paquete">
              <div className="nombre">PAQUETE 2</div>
              <div className="precio">$ 12,000 MXN / mes</div>
              <div className="linea"></div>
              <div className="descripcion">
                Lorem ipsum dolor sit amet consectetur. Lectus interdum lectus
                facilisis arcu turpis tellus. Purus pulvinar gravida purus nulla
                viverra vulputate cras gravida est.
              </div>
              <div className="caracteristicas">
                <p>
                  <span className="icono">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      height="14px"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </span>
                  Item 1. Lorem ipsum dolor sit.
                </p>
                <p>
                  <span className="icono">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      height="14px"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </span>
                  Item 2. Lorem ipsum dolor sit.
                </p>
                <p>
                  <span className="icono">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      height="14px"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </span>
                  Item 3. Lorem ipsum dolor sit.
                </p>
                <p>
                  <span className="icono">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      height="14px"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </span>
                  Item 4. Lorem ipsum dolor sit.
                </p>
              </div>
            </div>
            <Fade right>
              <div className="paquete">
                <div className="nombre">PAQUETE 3</div>
                <div className="precio">$ 8,000 MXN / mes</div>
                <div className="linea"></div>
                <div className="descripcion">
                  Lorem ipsum dolor sit amet consectetur. Lectus interdum lectus
                  facilisis arcu turpis tellus. Purus pulvinar gravida purus
                  nulla viverra vulputate cras gravida est.
                </div>
                <div className="caracteristicas">
                  <p>
                    <span className="icono">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        height="14px"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </span>
                    Item 1. Lorem ipsum dolor sit.
                  </p>
                  <p>
                    <span className="icono">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        height="14px"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </span>
                    Item 2. Lorem ipsum dolor sit.
                  </p>
                  <p>
                    <span className="icono">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        height="14px"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </span>
                    Item 3. Lorem ipsum dolor sit.
                  </p>
                  <p>
                    <span className="icono">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        height="14px"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </span>
                    Item 4. Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <Fade right>
          <div className="boton">
            <a href="/">CUÉNTANOS TUS NECESIDADES</a>
          </div>
        </Fade>
      </div>
      <div className="proyectos" id="proyectos">
        <div className="container">
          <div className="cajas-proyectos">
            <Fade right>
              <div className="caja-izquierda">
                <div className="texto">PROYECTOS</div>
                <div className="texto-2">
                  Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed{" "}
                  <br></br>
                  do eiusmod tempor incididunt ut labore dolore magna aliqua.{" "}
                  <br></br>
                  Etiam suscipit auctor cursus.<br></br>
                  <div className="boton">
                    <button onClick={goToContacto}>CONTÁCTANOS</button>
                  </div>
                </div>
                <div className="flechas">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-arrow-left-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                      />
                    </svg>
                  </div>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-arrow-right-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="caja-derecha">
                <div className="proyecto-img">
                  <img src="img/cbd-img.png" alt="cbd" />
                </div>
                <div className="contador">01/08</div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="nosotros" id="nosotros">
        <div className="container">
          <div className="nosotros-cajas">
            <div className="caja-izquierda">
              <Fade right>
                <div className="nosotros-img">
                  <img src="img/rectangle.png" alt="rectangle" />
                </div>
              </Fade>
            </div>
            <Fade left>
              <div className="caja-derecha">
                <div className="titulo">Nosotros</div>
                <div className="texto">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua.
                    Etiam suscipit auctor cursus. Sed tempus elit vel dui
                    scelerisque dignissim. Aenean ut urna et lorem vestibulum
                    dignissim. Suspendisse pretium purus feugiat, posuere augue
                    in, condimentum justo. Integer imperdiet nunc condimentum
                    consequat consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua.
                    Etiam suscipit auctor cursus. Sed tempus scelerisque
                    dignissim. Aenean ut urna et lorem vestibulum dignissim.
                    Suspendisse pretium purus feugiat.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="clientes">
        <div className="container">
          <div className="caja-clientes">
            <Fade left>
              <div className="caja-izquierda">
                <div className="texto">
                  EMPRESAS QUE <br></br>HAN CONFIADO <br></br>EN NOSOTROS
                </div>
              </div>
            </Fade>
            <div className="caja-derecha">
              <Fade right>
                <div className="nosotros-img">
                  <img src="img/clientes.png" alt="clientes" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="contacto" id="contacto">
        <div className="container">
          <div className="caja-contacto">
            <Fade left>
              <div className="caja-izquierda">
                <div className="formulario">
                  <form>
                    <input type="text" placeholder="NOMBRE" />
                    <input type="text" placeholder="TELÉFONO" />
                    <input type="text" placeholder="EMAIL" />
                    <input type="text" placeholder="MENSAJE" />
                  </form>
                </div>
                <div className="boton">
                  <a href="/">ENVIAR MENSAJE</a>
                </div>
              </div>
            </Fade> <Fade right>
              <div className="caja-derecha">
                <div className="titulo">¿HABLAMOS?</div>
                <div className="texto">
                  <p>
                    Ponte en contacto con nosotros y juntos <br></br>
                    desarrollemos la mejor estrategia de <br></br>marketing para
                    impulsar tu proyecto.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="caja-icons">
            <div className="caja-izquierda">
              <div className="texto">
                Lorem ipsum dolor sit amet consectetur <br></br>Elit lacus sem
                integer velit erat ipsum ut<br></br> cum bibendum Eu mattis at
                quam<br></br>maecenas enim Scelerisque sed aliquam imperdiet
                velit tempor nibh.
              </div>
            </div>
            <div className="caja-centro">
              <div className="caja-icon">
                <a href="mailto:contacto@insightagency.com">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                  </span>
                  contacto@insightagency.com
                </a>
              </div>
              <div className="caja-icon">
                <a
                  href="https://wa.me/525537518429"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                  </span>
                  (55) 3751 8429
                </a>
              </div>
              <div className="caja-icon">
                <a href="tel:(55) 3336 6959">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                  </span>
                  (55) 3336 6959
                </a>
              </div>
              <div className="caja-icon">
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </span>
                  Ciudad de México, México
                </a>
              </div>
            </div>
            <div className="caja-derecha">
              <div className="caja-icon">
                <a
                  href="https://www.instagram.com/insightagency.mx/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </span>
                  /insightagency.mx
                </a>
              </div>
              <div className=" caja-icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100082667613583"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </span>
                  /insightagency.mx
                </a>
              </div>
              <div className="caja-icon">
                <a
                  href="https://www.linkedin.com/company/insight-agency-m%C3%A9xico/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </span>
                  /insightagency.mx
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          InsightAgency © 2023, All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default App;
