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
        INFORMACION PERSONAL
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
        <strong>secundarios</strong> <br/>
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
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default App;
