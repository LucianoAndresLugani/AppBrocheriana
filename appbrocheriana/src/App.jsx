import './App.css'
import logo from '../src/assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Routes, Route,Link } from "react-router-dom";
import Patron from './assets/movida.jpg';
import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../src/assets/1.png';
import foto2 from '../src/assets/2.png';
import foto3 from '../src/assets/3.png';
import foto4 from '../src/assets/4.png';
import Ecobotella1 from '../src/assets/ecobotellas1.png';
import Ecobotella2 from '../src/assets/ecobotellas2.png';
import Ecobotella3 from '../src/assets/ecobotellas3.png';
import economia1 from '../src/assets/eco.jpg';
import economia2 from '../src/assets/eco2.jpg';
import economia3 from '../src/assets/eco3.jpg';
import plasticos from '../src/assets/Plasticos.mp4';
import modacirucular from '../src/assets/MODACIRCULAR.mp4';
import ecobotellas from '../src/assets/ecobotellas.mp4';
import aireacondicionado from '../src/assets/aireacondicionado.mp4';
import ahorraEnergia from '../src/assets/ahorraEnergia.mp4';



const Alert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="alert-message">{message}</div>
      <button className="alert-close" onClick={onClose}>X</button>
    </div>
  );
}

function Carousell() {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', paddingBottom:'5%'}}>
      <Carousel fade>
        <Carousel.Item>
          <img src={foto4} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={foto1} className="d-block w-100" alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={foto2} className="d-block w-100" alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={foto3} className="d-block w-100" alt="Fourth slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
function Carousell2({img1, img2, img3}) {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', paddingBottom:'5%'}}>
      <Carousel fade>
        <Carousel.Item>
          <img src={img1} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} className="d-block w-100" alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} className="d-block w-100" alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
function Carousell3({img1, img2, img3, video}) {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', paddingBottom:'5%'}}>
      <Carousel fade>
        <Carousel.Item>
          <img src={img1} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} className="d-block w-100" alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} className="d-block w-100" alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <iframe src={video} className="d-block w-100" alt="Four slide"></iframe>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
function Navbarr() {
  return (
    <Navbar expand="lg" sticky="top" className=" movida navbar navbar-expand-lg bg-body-tertiary ">
      <Container>
      <Navbar.Brand className='icono'>
      <img alt="logo" src={logo} width="60" height="60" className="logo align-top"/><Link className='logo' to="/" href='Home'>Aplicación Bocheriana</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='User' href='User'><img width="60" height="60" className='cuenta' src={logo}/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const BrocheroCounter = ({ brocherosGanados }) => {
  return (
    <p className='brocheros'>Brocheros Ganados: {brocherosGanados}</p>
  )
};
const Boton=({texto,donde,lugar})=>{
  return(
  <div className='patern'>     
    <img  className='patron' src={Patron}></img>
    <Link to={lugar} href={donde}><Button className='botones'>{texto}</Button></Link>
  </div>
  )
}
function Home(){
  return(
    <div className='orden'>
    <div className='Fondo-brocheros'>
      <BrocheroCounter/>
    </div>
    <h1>Misiones</h1>
    <h3>TUTORIALES</h3>
    <Boton texto={'REDUCIR CONSUMO DE AGUA'} lugar="Movida" donde={'Movida'}></Boton>
    <Boton texto={'ECOBOTELLAS'}lugar="Movida2" donde={'Movida2'}></Boton>
    <Boton texto={'COMPOSTAJE'} lugar="Movida3" donde={'Movida3'}></Boton>
    <Boton texto={'PLASTICOS DE UN SOLO USO'} lugar="Movida4" donde={'Movida4'}></Boton>
    <Boton texto={'MODA CIRCULAR'} lugar="Movida5" donde={'Movida5'}></Boton>
    <Boton texto={'CUIDADOS DEL AIRE ACONDICIONADO'} lugar="Movida6" donde={'Movida6'}></Boton>
    <Boton texto={'CUIDADOS LA DE ENERGIA'} lugar="Movida7" donde={'Movida7'}></Boton>
    
  </div>
  )
}

function User(){
  return(
    <div className='orden'>
      <div className='Fondo-brocheros'>
        <BrocheroCounter/>
      </div>
        <h1 className='titulo-cuenta'>MI CUENTA</h1>
        <div className='user-stuff'>
          <h3 >Nombre:</h3>
        </div>
        <div className='user-stuff'>
          <h3 >Mail:</h3>
        </div>
        <div className='user-stuff'>
          <h3 >Contraseña:</h3>
        </div>
        <div className='user-stuff'>
          <h3 >Misiones Completadas:</h3>
        </div>
        <img  className='patron-user' src={Patron}></img>
        <Link to='Movida' href='Movida'><Button className='botones-cuenta'>RESETEAR CONTRASEÑA</Button></Link>
        <Link to='/' href='Home'><Button className='botones-cuenta'>VOLVER A LAS MISIONES</Button></Link>
    </div>
  )
};

function Movida() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="orden">
      <h1>Primera Misión: El Agua</h1>
      <Carousell />
      <Button className="boton" variant="dark" onClick={handleAlert}>Enviar</Button>
      <Link to="/" href="Home">
        <Button className="volver" variant="dark">Volver a las misiones</Button>
      </Link>

      {showAlert && (
        <Alert 
          message="Misión cumplida, gracias por ahorrar agua!" 
          onClose={() => setShowAlert(false)} 
        />
      )}
    </div>
  );
}

function Movida2() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="orden">
      <h1>Segunda misión: Ecobotellas</h1>
      <Carousell2 img1={Ecobotella1} img2={Ecobotella2} img3={Ecobotella3} />
      <Button className="boton" variant="dark" onClick={handleAlert}>Enviar!</Button>
      <Link to="/" href="Home">
        <Button className="volver" variant="dark">Volver a las misiones</Button>
      </Link>

      {showAlert && (
        <Alert 
          message="Misión cumplida, gracias por armar ecobotellas!" 
          onClose={() => setShowAlert(false)} 
        />
      )}
    </div>
  );
}

function Movida3() {
  const [showAlert, setShowAlert] = useState(false); 

  const handleAlert = () => {
    setShowAlert(true); 
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className='orden'>
      <h1>Tercera misión: Compostaje</h1>
      <Carousell2 img1={economia1} img2={economia2} img3={economia3} video={ecobotellas}/>
      <Button className="boton" variant="dark" onClick={handleAlert}>Enviar!</Button>
      <Link to='/' href='Home'>
        <Button className='volver' variant="dark">Volver a las misiones</Button>
      </Link>

      {showAlert && (
        <Alert 
          message="Misión cumplida, gracias por formar parte de la economía circular!" 
          onClose={() => setShowAlert(false)} 
        />
      )}
    </div>
  );
}

function Movida4() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true); 
    setTimeout(() => setShowAlert(false), 3000); 
  };

  return (
    <div className='orden'>
      <h1>Cuarta misión: Plásticos</h1>
      <video src={plasticos} height={200} autoPlay loop></video>
      <Button className="boton" variant="dark" onClick={handleAlert}>Enviar!</Button>
      <Link to='/' href='Home'>
        <Button className='volver' variant="dark">Volver a las misiones</Button>
      </Link>

      {showAlert && (
        <Alert 
          message="Misión cumplida, gracias por informarte acerca de los daños que produce el plástico" 
          onClose={() => setShowAlert(false)} 
        />
      )}
    </div>
  );
}


function Movida5() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true); 
    setTimeout(() => setShowAlert(false), 3000); 
  };

  return (
    <div className='orden'>
      <h1>Quinta misión: Moda Circular</h1>
      <video src={modacirucular} height={200} autoPlay loop></video>
      <Button className="boton" variant="dark" onClick={handleAlert}>Enviar!</Button>
      <Link to='/' href='Home'>
        <Button className='volver' variant="dark">Volver a las misiones</Button>
      </Link>

      {showAlert && (
        <Alert 
          message="Misión cumplida, gracias por informarte acerca de los daños que produce el plástico" 
          onClose={() => setShowAlert(false)} 
        />
      )}
    </div>
  );
}




function Movida6() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true); 
    setTimeout(() => setShowAlert(false), 3000); 
  };

  return (
    <div className='orden'>
      <h1>Sexta misión: Cuidados Aire Acondicionados</h1>
      <video src={aireacondicionado} height={410} autoPlay loop></video>
      <Button className="boton" variant="dark" onClick={handleAlert}>Enviar!</Button>
      <Link to='/' href='Home'>
        <Button className='volver' variant="dark">Volver a las misiones</Button>
      </Link>

      {showAlert && (
        <Alert 
          message="Misión cumplida, gracias por informarte acerca de los daños que produce el plástico" 
          onClose={() => setShowAlert(false)} 
        />
      )}
    </div>
  );
}


function Movida7() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true); 
    setTimeout(() => setShowAlert(false), 3000); 
  };

  return (
    <div className='orden'>
      <h1>Septima misión: Cuidados de la energia</h1>
      <video src={ahorraEnergia}height={200} autoPlay loop></video>
      <Button className="boton" variant="dark" onClick={handleAlert}>Enviar!</Button>
      <Link to='/' href='Home'>
        <Button className='volver' variant="dark">Volver a las misiones</Button>
      </Link>

      {showAlert && (
        <Alert 
          message="Misión cumplida, gracias por informarte acerca de los daños que produce el plástico" 
          onClose={() => setShowAlert(false)} 
        />
      )}
    </div>
  );
}





function Sesion(){
  return(
    <div className='orden2'>
      <h1>APLICACIÓN BOCHERIANA</h1>
      <div className='patern'>     
        <img  className='patron' src={Patron}></img>
        <Link to='Movida' href='Movida'><Button className='botones-sesion'>INICIAR SESION</Button></Link>
        </div>
      <div className='patern'>     
        <img  className='patron' src={Patron}></img>
        <Link to='Movida' href='Movida'><Button className='botones-sesion'>SOY NUEVO</Button></Link>
      </div>
    </div>
  )
}
function App() {
  const [brocherosGanados, setBrocherosGanados] = useState(0);

  return (
    <>
      <Navbarr></Navbarr>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='User' element={<User/>}/>
        <Route path='Movida' element={<Movida/>}/>
        <Route path='Movida2' element={<Movida2/>}/>
        <Route path='Movida3' element={<Movida3/>}/>
        <Route path='Movida4' element={<Movida4/>}/>
       
        <Route path='Movida5' element={<Movida5/>}/>
        <Route path='Movida6' element={<Movida6/>}/>
        <Route path='Movida7' element={<Movida7/>}/>
        
        
        <Route path='Sesion' element={<Sesion/>}/>
      </Routes>
    </>
  )
}

export default App
