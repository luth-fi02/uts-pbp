/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./assets/css/Landingpage.css"
import "./assets/css/base.css";
import "./assets/css/main.css";
import "./assets/css/slideshow.css";
import Usercheck from "../helpers/Usercheck";
import Getuser from "../helpers/Getuser";
// import "./assets/css/vendor.css";

// import "./assets/js/modernizr.js";
// import "./assets/js/pace.min.js";
// import "./assets/js/plugins.js";
// import "./assets/js/main.js";

function Header() {
    let check=Usercheck();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Add this useEffect
    React.useEffect(() => {
        const handleClickOutside = (e) => {
            if (show && e.target.closest(".slide-menu").length === 0) {
                setShow(false);
            }
        };
        document.addEventListener("mouseup", handleClickOutside);
        return () => {
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, [show]);

    return (
        <header className="s-header">
            <Offcanvas
                className="slide-menu bg-black"
                show={show}
                onHide={handleClose}
                backdrop={false}
                placement="end"
                name={"end"}
                style={{ width: "20%" }}
            >
                <Offcanvas.Header
                    closeButton
                    closeVariant="white"
                    className="header-title bg-black"
                >
                    <Offcanvas.Title className="bg-black">
                        <h5 className="slide-title animate__animated animate__fadeIn animate__slower animate__delay-2s">
                            Menu
                        </h5>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="header-body bg-black">
                    <ul className="header-content-list animate__animated animate__fadeInRight animate__slow">
                        <li>
                            <a href="#home" title="home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" title="about">
                                About us
                            </a>
                        </li>
                        <li>
                            <a href="#ceo" title="services">
                                Our CEO
                            </a>
                        </li>
                        <li>
                            <a href="#footer" title="contact">
                                Contact
                            </a>
                        </li>
                        
                        <li>
                            { check ? (
                            <a href="/homepage" title="login">
                                Dashboard
                            </a>
                            ) : (
                            <a href="/login" title="login">
                                Login
                            </a>
                            )}
                        </li>
                    </ul>
                    <ul className="header-content-social animate__animated animate__fadeInUp animate__slow animate__delay-1s">
                        <li>
                            <a href="#0">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <i className="fab fa-behance"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <i className="fab fa-dribbble"></i>
                            </a>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

            <a className="header-menu-toggle" onClick={handleShow}>
                <span className="header-menu-icon"></span>
            </a>
        </header>
    );
}


function Home() {
    return (
        <section
            id="home"
            className="s-home target-section"
            data-parallax="scroll"
            data-natural-width="3000"
            data-natural-height="2000"
            data-position-y="top"
        >
            <div className="shadow-overlay"></div>
            <div className="home-content animate__animated animate__fadeInUp animate__slow">
                <div className="row home-content__main">
                    <h1>
                        Future Tech. <br />
                    </h1>

                    <p>We will provide attractive offers and the best services</p>
                </div>{" "}
                {/* end home-content__main */}
            </div>{" "}
            {/* end home-content */}
            <ul className="home-sidelinks animate__animated animate__fadeIn animate__slow animate__delay-1s">
                <li>
                    <a className="smoothscroll" href="#about">
                        About Us<span>who are we</span>
                    </a>
                </li>
                <li>
                    <a className="smoothscroll" href="#ceo">
                        CEO<span>who are our leader</span>
                    </a>
                </li>
                <li>
                    <a className="smoothscroll" href="#footer">
                        Contact<span>get in touch</span>
                    </a>
                </li>
            </ul>{" "}
            {/* end home-sidelinks */}
            <ul className="home-social">
                <li className="home-social-title">Follow Us</li>
                <li>
                    <a href="#0">
                        <i className="fab fa-facebook"></i>
                        <span className="home-social-text">Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="#0">
                        <i className="fab fa-twitter"></i>
                        <span className="home-social-text">Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="#0">
                        <i className="fab fa-linkedin"></i>
                        <span className="home-social-text">LinkedIn</span>
                    </a>
                </li>
            </ul>{" "}
            {/* end home-social */}
            <a href="#about" className="home-scroll smoothscroll">
                <span className="home-scroll__text">Scroll Down</span>
                <span className="home-scroll__icon"></span>
            </a>{" "}
            {/* end home-scroll */}
        </section>
    );
}

function NavbarComponents() {
    let userdata = Getuser();
    let check=Usercheck();
    return (
        <Navbar data-bs-theme="light" className="navBar sticky-top p-4">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="logo.png"
                        width="30"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand className="nav-brand fs-3" href="#home">
                    Future Tech
                </Navbar.Brand>
                <Nav className="me-auto nav-list">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About us</Nav.Link>
                    <Nav.Link href="#ceo">CEO</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="sign-in text-decoration-none">
                    Signed in as:{" "}
                        { check ? (
                            <a className="text-decoration-none" href="/homepage">
                            {userdata.username}
                            </a>
                            ) : (
                            <a className="text-decoration-none" href="/login">
                            Guest | Login
                            </a>
                        )}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function AdvantagesComponents() {
    return (
        <Container id="about" className="container-adv" fluid>
            <Row>
                <Col
                    className="column"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay=""
                >
                    <div className="cell d-flex gap-5 align-items-start">
                        <h3 className="mt-2 fs-4">01</h3>
                        <div className="cell-text">
                            <h1 className="mb-4">Quality and Customer Satisfaction</h1>
                            <p className="ps-1">
                                We are committed to delivering high-quality software solutions
                                that meet the needs of our customers. Customer satisfaction is
                                our top priority.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col
                    className="column"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                >
                    <div className="cell d-flex gap-5 align-items-start">
                        <h3 className="mt-2 fs-4">02</h3>
                        <div className="cell-text">
                            <h1 className="mb-4">Cutting-Edge and Innovative Technology</h1>
                            <p className="ps-1">
                                We adopt the latest and innovative technologies in software
                                development to ensure our products are always at the forefront
                                of the industry.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col
                    className="column"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay=""
                >
                    <div className="cell d-flex gap-5 align-items-start">
                        <h3 className="mt-2 fs-4">03</h3>
                        <div className="cell-text">
                            <h1 className="mb-4">Expert Software Development Team</h1>
                            <p className="ps-1">
                                Our team consists of experienced experts in software
                                development. They have in-depth knowledge in various
                                technologies and the latest development methodologies.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col
                    className="column"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                >
                    <div className="cell d-flex gap-5 align-items-start">
                        <h3 className="mt-2 fs-4">04</h3>
                        <div className="cell-text">
                            <h1 className="mb-4">Customized Solutions for Client Needs</h1>
                            <p className="ps-1">
                                We provide tailored software solutions to meet the specific needs of our clients. Our flexible approach allows us to adapt to the unique requirements of each project.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


function InnovativeComponents() {
    return (
        <div className="container-inno">
            <h1 data-aos="fade-right" data-aos-duration="700">
                – Innovative Components
            </h1>
            <div className="cards">
                <Card
                    className="card-innovation"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay=""
                >
                    <Card.Body>
                        <Card.Title className="card-num">01</Card.Title>
                        <Card.Title className="card-title">
                            Best Development Methodologies
                        </Card.Title>
                        <Card.Text className="card-text">
                            We implement the best development methodologies, such as Agile or
                            DevOps, to ensure efficiency and high quality in every stage of
                            software development.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    className="card-innovation"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                >
                    <Card.Body>
                        <Card.Title className="card-num">02</Card.Title>
                        <Card.Title className="card-title">
                            Flexibility and Scalability
                        </Card.Title>
                        <Card.Text className="card-text">
                            Our products are designed with the principles of flexibility and
                            scalability, allowing them to be customized to the evolving needs
                            of businesses and to handle company growth.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    className="card-innovation"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <Card.Body>
                        <Card.Title className="card-num">03</Card.Title>
                        <Card.Title className="card-title">
                            Continuous Innovation
                        </Card.Title>
                        <Card.Text className="card-text">
                            We continually research and develop to introduce new innovative
                            features in our products. We are committed to being leaders in the
                            industry by continuously innovating.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    className="card-innovation"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                >
                    <Card.Body>
                        <Card.Title className="card-num">04</Card.Title>
                        <Card.Title className="card-title">
                            Strategic Partnerships and Collaborations
                        </Card.Title>
                        <Card.Text className="card-text">
                            We build strategic partnerships with clients and business partners
                            to create better solutions together. Collaboration is the key to
                            our success.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

function Business() {
    return (
        <>
            <NavbarComponents />
            <AdvantagesComponents />
            <InnovativeComponents />
        </>
    );
}

function Profile() {
    return (
        <div id="ceo" className="container-profile">
            <img
                src="ceo.jpg"
                alt=""
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
            />
            <div className="profile">
                <h3
                    className="profile-position"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay=""
                >
                    — Chief Executive Officer
                </h3>
                <h1
                    className="profile-name"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                >
                    Alex Fergusson
                </h1>
                <p
                    className="profile-desc"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nulla
                    suscipit consectetur non sapiente dolore veritatis enim ipsa earum
                    magni accusamus similique debitis dolorem facere numquam officiis ad
                    reiciendis dolor alias unde beatae dignissimos. Quaerat quam, ipsa
                    eaque non praesentium corrupti rerum officiis modi quibusdam a, iusto
                    minus, delectus necessitatibus?
                </p>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <div id="footer" className="container-footer">
            <div className="company">
                <div className="company-desc">
                    <h3>Future Tech</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                        voluptatem quisquam cum voluptatum quia expedita. Quidem,
                        repellendus esse libero nihil fuga explicabo aliquam sed delectus?
                        Quaerat quasi excepturi illo? Recusandae?
                    </p>
                </div>
                <img src="logo.png" alt="" />
                <div className="company-info">
                    <h3 className="address">Address</h3>
                    <h4 className="address">Jl. Ketintang Surabaya</h4>
                    <h3 className="email">Email</h3>
                    <h4 className="email">sample@yahoo.com</h4>
                    <h3 className="number">Phone Number</h3>
                    <h4 className="number">+62 821-7777-7777</h4>
                </div>
            </div>
            <hr />

            <div className="footer">
                <h5 className="copyright">2024 Future Tech. All right reserved.</h5>
                <ul className="header-content-social animate__animated animate__fadeInUp animate__slow animate__delay-1s">
                    <li>
                        <a href="#0">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                            <i className="fab fa-behance"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                            <i className="fab fa-dribbble"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default function Landingpage() {
    return (
        <>
            <Header />
            <Home />
            <Business />
            <Profile />
            <Footer />
        </>
    );
}
