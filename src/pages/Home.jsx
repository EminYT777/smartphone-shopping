import { useState } from "react";
import { Carousel, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
    const [user, setUser] = useState({
        name: "Murad"
    });
    // function getUser() {
    //     setUser({
    //         name: "Nurlan"
    //     })
    // }
    // getUser();
    function renderMenu() {
        if (user) {
            return (
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to='/profile'>
                                Profile
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/smartphones'>
                                Smartphones
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            Log out
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            )

        } else {
            return (
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to='/smartphones'>
                                Smartphones
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/log-in'>
                                Log In
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            )

        }
    }
    return (
        <>
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to='/'>
                                Smartphone shopping
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        {renderMenu()}

                    </Container>
                </Navbar>
            </header>
            <div>
                <Carousel>
                    <Carousel.Item className="height300">
                        <div className="imageBox">
                            <img className="height100" src="https://smarton.az/storage/products/47096/210927160010235057.webp" alt="" />
                        </div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="height300">
                        <div className="imageBox">
                            <img className="height100" src="https://images.samsung.com/is/image/samsung/p6pim/my/2401/gallery/my-galaxy-s24-s928-sm-s928bztqxme-thumb-539302071" alt="" />
                        </div>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="height300">
                        <div className="imageBox">
                            <img className="height100" src="https://www.bakuelectronics.az/assets/images/products/146716/smartfon-xiaomi-14-12gb512gb-black-1.jpg" alt="" />
                        </div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}