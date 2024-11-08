
import styled from 'styled-components'
import BurgerButton from './BurgerButton';

const Index =() => {

    return (
        <>
        <NavContainer>
        <h2>AGRI <span>TECH</span></h2>
        <div>
            <a href="#" className="Inicio" id=''>Inicio</a>
            <a href="#" className="Nosotros" id=''>Nosotros</a>
            <a href="#" className="Servicios" id=''>Servicios</a>
            <a href="#" className="Nuestros Clientes" id="">Nuestros Clientes</a>
            <a href="#" className="Contacto" id="">Contacto</a>
        </div>
        <div className='burger'>
        <BurgerButton/>
        </div>
        </NavContainer>
        </>
    );
}


export default Index

//?Esta constante corresponde a la importacion e uso de la biblioteca styled-components
//?Es una fragmentacion de css pero en uso directo en el software
const NavContainer = styled.nav`

    h2{
        color: white;
        font-weight: 400;
        span {
            color: green;
            font-weight: bold;
        }
    }
    padding : .4rem;
    background-color : #333;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
    .burger{
        @media(min-width: 786px){
            display: none;
        }
    }

`