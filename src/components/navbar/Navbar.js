import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { Nav, Container, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbarr = props => {
    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Сварные соединения</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Главная</NavLink>
                    <button className="button" onClick={() => navigate(-1)}>Назад</button>
                    <button className="button" onClick={() => navigate('/calculation')}>Расчет</button>
                    <button className="button" onClick={() => navigate('/welding')}>Справка по сварке</button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbarr