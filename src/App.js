import logo from './logo.svg';
import Foto from './Foto.jpg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
   <div>
   <br/>
            <h2>Hoja de vida John Faber Zamora Trujillo</h2><br/>
            <img src={Foto} width='150px'/>
    </div> <br/>

   <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      PERFIL PROFESIONAL
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      Tecnólogo en Telecomunicaciones y en Ing. de sistemas. Con experiencia laboral en el área de las telecomunicaciones, de excelentes relaciones interpersonales y habilidad para trabajar en equipo o individual. Enfocado en la productividad y liderazgo. Con alto grado de responsabilidad y fácil interpretación de las políticas organizacionales.
      Persona con excelente actitud y vocación de servicio, dinámica, paciente, puntual y organizada, destacado por la habilidad de trabajo en equipo, capacidad de aprendizaje de forma rápida y adaptabilidad. Comprometido, autónomo y orientado a la obtención de resultados.
      Experiencia en servicio al cliente, generando soluciones a peticiones, quejas o reclamos, cobro de cartera y análisis de información de facturación. Facilidad de expresión y excelente fluidez verbal, conocimiento en el manejo diversas aplicaciones Office. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        INFORMACIÓN PERSONAL
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>Nombres y Apellidos: </strong> John Faber Zamora Trujillo<br/>
        <strong>Cedula: </strong> 1053809258<br/>
        <strong>Fecha de Nacimiento: </strong> 12 de Marzo de 1991<br/>
        <strong>Dirección: </strong> Calle 65 # 39B-10<br/>
        <strong>Celular: </strong> 312-804-3614<br/>
        <strong>Correo Electrónico: </strong> john.zamora@chec.com.co<br/>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        FORMACION ACADEMICA
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>Primarios</strong> <br/>
                    Centro Docente Mariela Quintero<br/>
                    Basica Primaria<br/>
                    2000<br/>
                    Manizales<br/><br/>
        <strong>Secundarios</strong> <br/>
                    Liceo Mixto Aranjuez<br/>
                    Bachiller Industrial Electricidad y Electrónica<br/>
                    2007<br/>
                    Manizales<br/><br/>
        <strong>Universitarios</strong> <br/>
                    Universidad de Caldas<br/>
                    Tecnólogo en Sistemas Informáticos<br/>
                    2014<br/>
                    Manizales<br/><br/>
                    
                    Universidad de Manizales<br/>
                    Ingeniería de Sistemas y Telecomunicaciones<br/>
                    Cursando V Semestre<br/>
                    Manizales<br/>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        EXPERIENCIA LABORAL
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      <strong>Empresa: </strong> CHEC<br/>
        <strong>Cargo: </strong> Profesional 3(e)<br/>
        <strong>Área: </strong> Servicios Corporativos<br/>
        <strong>Fecha de Ingreso; </strong> 21 de Diciembre de 2010<br/>
        <strong>Ciudad: </strong> Manizales<br/>
        </div>
    </div>
  </div>
</div>
    </>
  );
}

export default App;
