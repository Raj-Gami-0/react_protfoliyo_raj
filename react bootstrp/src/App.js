import 'bootstrap/dist/css/bootstrap.min.css';
import * as rv from 'react-bootstrap';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState } from 'react';
import './App.css'
import { BsHeadphones, BsBusFrontFill, BsSearchHeart, BsFacebook, BsLinkedin } from "react-icons/bs";
import { VscBriefcase } from "react-icons/vsc";
// import { BiBadge } from "react-icons/bi";
import { SiCoffeescript } from "react-icons/si";
import { GiProgression, GiFalconMoon, GiHillConquest } from "react-icons/gi";
import { IoPersonAddSharp } from "react-icons/io5";
import { BiMoviePlay, BiHappy } from "react-icons/bi";
import { MdSportsSoccer, MdOutlineDisplaySettings } from "react-icons/md";
import { SiAntdesign, SiMaterialdesignicons, SiMinutemailer, SiWebmoney } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { CiMobile3 } from "react-icons/ci";
import { FaQuoteRight, FaBookOpen, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdAddIcCall } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import 'animate.css';
// import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

function App() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <nav className='clyde'>
                <rv.Container>
                    <div className='d-flex align-items-center justify-content-between' >
                        <a href="#" className='text'>RAJ <span>.</span> </a>
                        {/* <button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle collapsed d-lg-none" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="oi oi-menu "></span> Menu
                        </button> */}
                        <rv.Button variant="primary" onClick={handleShow} className="canvasbtn me-2 navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle collapsed d-lg-none">
                            <span ></span>
                            <div class="bar"><div class="line1"></div><div class="line2"></div><div class="line3"></div></div>
                        </rv.Button>
                        <rv.Offcanvas scroll={true} backdrop={false} show={show} onHide={handleClose} placement='end'>
                            <rv.Offcanvas.Header closeButton>
                                <rv.Offcanvas.Title className='fw-bold fs-1'></rv.Offcanvas.Title>
                            </rv.Offcanvas.Header>
                            < rv.Offcanvas.Body className='bg-light' style={{ overflow: 'visible' }}>
                                {/* <ul className='=m-0  '>
                                    <li><a href="#"><span>Home</span> </a></li>
                                    <li><a href="#"><span>About</span> </a></li>
                                    <li><a href="#"><span>Skills</span> </a></li>
                                    <li><a href="#"><span>Services</span> </a></li>
                                    <li><a href="#"><span>Projects</span> </a></li>
                                    <li><a href="#"><span>Blog</span> </a></li>
                                    <li><a href="#"><span>Contact</span> </a></li>
                                </ul> */}
                                <div className='mobilenavigation' >
                                    <div class="accordion-header" onClick={handleClose}>
                                        <a href="#" className='accordion-button ' > Home</a>
                                    </div>
                                    <div class="accordion-header">
                                        <a href="#About" className='accordion-button '> About</a>
                                    </div>
                                    <div class="accordion-header">
                                        <a href="#Skills" className='accordion-button '> Skills</a>
                                    </div>
                                    <div class="accordion-header">
                                        <a href="#Great" className='accordion-button '> Services</a>
                                    </div>
                                    <div class="accordion-header">
                                        <a href="#Project" className='accordion-button '> Projects</a>
                                    </div>
                                    <div class="accordion-header">
                                        <a href="#" className='accordion-button '> Blog</a>
                                    </div>
                                    <div class="accordion-header">
                                        <a href="#Contact" className='accordion-button '> Contact</a>
                                    </div>
                                </div>
                            </rv.Offcanvas.Body>
                        </rv.Offcanvas>
                        <ul className='d-flex m-0 d-none d-lg-flex'>
                            <li><a c href="#"><span>Home</span> </a></li>
                            <li><a href="#About"><span>About</span> </a></li>
                            <li><a href="#Skills"><span>Skills</span> </a></li>
                            <li><a href="#Great"><span>Services</span> </a></li>
                            <li><a href="#Project"><span>Projects</span> </a></li>
                            <li><a href="#"><span>Blog</span> </a></li>
                            <li><a href="#Contact"><span>Contact</span> </a></li>
                        </ul>
                    </div>
                    <ul className='=m-0  d-none'>
                        <li><a href="#"><span>Home</span> </a></li>
                        <li><a href="#"><span>About</span> </a></li>
                        <li><a href="#"><span>Skills</span> </a></li>
                        <li><a href="#"><span>Services</span> </a></li>
                        <li><a href="#"><span>Projects</span> </a></li>
                        <li><a href="#"><span>Blog</span> </a></li>
                        <li><a href="#"><span>Contact</span> </a></li>
                    </ul>
                </rv.Container>
            </nav>
            {/* =======================================================hello clyde==================================== */}
            <OwlCarousel className='silder1' loop='true' items={1} autoplay autoplayTimeout={5000} animateIn='animate__fadeIn' animateOut='animate__fadeOut' >
                <div className=' d-md-flex no-gutters slider-text raj align-items-end justify-content-end'>
                    <div class='item bg_img1'>
                        <div className='slide_text'>
                            <div className="overlay"></div>
                            <div className="overlay-1"></div>
                        </div>
                    </div>
                    <div className='about_text1'>
                        <div className='text1'>
                            <span className='top_text1'>We Design & Build Brands</span>
                            <h1 className='mb-4 mt-3'>
                                Hi, I am
                                <span>Clyde</span>
                                This is my favorite work.
                            </h1>
                            <p>
                                <a href="#" class="btn btn-primary ab">Hire me</a>
                                <a href="#" class="btn btn-primary btn-outline-primary">Download CV</a>
                            </p>

                        </div>
                    </div>
                </div>
                <div className=' d-md-flex no-gutters slider-text align-items-end justify-content-end'>
                    <div class='item img1'>
                        <div className='slide_text'>
                            <div className="overlay"></div>
                            <div className="overlay-1"></div>
                        </div>
                    </div>
                    <div className='about_text1'>
                        <div className='text1'>
                            <span className='top_text1'>We Design & Build Brands</span>
                            <h1 class="mb-4 mt-3">Creative <span>UI/UX</span> Designer &amp; Developer</h1>
                            <p>
                                <a href="#" class="btn btn-primary ab">Hire me</a>
                                <a href="#" class="btn btn-primary btn-outline-primary">Download CV</a>
                            </p>

                        </div>
                    </div>
                </div>
            </OwlCarousel>
            {/* ===========================================projrct counter================================= */}

            <section className='bg_color'>
                <rv.Container>
                    <rv.Row>
                        <div className='col-md-3 justify-content-center'>
                            <div className='d-flex spesar'>
                                <div className='icon d-flex justify-content-center align-items-center'>
                                    <span><VscBriefcase className='iconsss'></VscBriefcase></span>
                                </div>
                                <div class="text_main">
                                    <strong class="number" data-number="750">1</strong>
                                    <span>CERTIFICATION APPROVAL</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 justify-content-center'>
                            <div className='d-flex spesar'>
                                <div className='icon d-flex justify-content-center align-items-center'>
                                    <span><IoPersonAddSharp className='iconsss'></IoPersonAddSharp></span>
                                </div>
                                <div class="text_main">
                                    <strong class="number" data-number="750">9</strong>
                                    <span>Student Complete</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 justify-content-center'>
                            <div className='d-flex spesar'>
                                <div className='icon d-flex justify-content-center align-items-center'>
                                    <span><BiHappy className='iconsss'></BiHappy></span>
                                </div>
                                <div class="text_main">
                                    <strong class="number" data-number="750">30</strong>
                                    <span>Happy client</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 justify-content-center'>
                            <div className='d-flex '>
                                <div className='icon d-flex justify-content-center align-items-center'>
                                    <span><GiProgression className='iconsss'></GiProgression></span>
                                </div>
                                <div class="text_main">
                                    <strong class="number" data-number="750">50</strong>
                                    <span>Project Complete</span>
                                </div>
                            </div>
                        </div>
                    </rv.Row>
                </rv.Container>
            </section>
            {/* ===============================================about me =================================== */}
            <section id='About'>
                <rv.Container>
                    <rv.Row>
                        <rv.Col md={7} lg={5} className='img20'>
                        </rv.Col>
                        <rv.Col md={5} lg={7} className='py-5 pl-md-4 pl-lg-5'>
                            <div className='py-md-6'>
                                <div className='row justify-content-start pb-3'>
                                    <div className='col-md-12 heding'>
                                        <span class="subheading">My Intro</span>
                                        <h2 className='mb-4'>About me</h2>
                                        <p>I am available for freelance work. Connect with me via and call in to my account.provides you with a customized website design that's perfect for your business or personal site.</p>
                                        <ul className='about-info mt-4 px-md-0 px-2'>
                                            <li className='d-flex'>
                                                <span>Name:</span>
                                                <span>Raj Gami</span>
                                            </li>
                                            <li className='d-flex'>
                                                <span>Date of birth:</span>
                                                <span>April 18, 2003</span>
                                            </li>
                                            <li className='d-flex'>
                                                <span>Address:</span>
                                                <span>Jgatnaka Srthana,surat</span>
                                            </li>
                                            <li className='d-flex'>
                                                <span>Zip code:</span>
                                                <span>395013</span>
                                            </li>
                                            <li className='d-flex'>
                                                <span>Email :</span>
                                                <span>rajgami999@gmail.com</span>
                                            </li>
                                            <li className='d-flex'>
                                                <span>Phone:</span>
                                                <span> +91 99984 77108</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <rv.Row className='xs-pl-2 mt-4'>
                                        <rv.Col sm={6} lg={3} xs={6}>
                                            <rv.Row className='line_1 align-items-center' >
                                                <rv.Col md={2} xs='2' className=''>
                                                    <div className='justify-content-center icon_degain text-center'>
                                                        <span><BsHeadphones ></BsHeadphones></span>
                                                    </div>
                                                </rv.Col>
                                                <rv.Col>
                                                    <div className='icon_text px-2'>
                                                        Music
                                                    </div>
                                                </rv.Col>
                                            </rv.Row>
                                        </rv.Col>
                                        <rv.Col sm={6} lg={3} xs={6}>
                                            <rv.Row className='line_1 align-items-center'>
                                                <rv.Col md={2} xs='2' >
                                                    <div className='justify-content-center icon_degain text-center'>
                                                        <span><BsBusFrontFill ></BsBusFrontFill></span>
                                                    </div>
                                                </rv.Col>
                                                <rv.Col>
                                                    <div className='icon_text px-2'>
                                                        Travel
                                                    </div>
                                                </rv.Col>
                                            </rv.Row>
                                        </rv.Col>
                                        <rv.Col sm={6} lg={3} xs={6}>
                                            <rv.Row className='line_1 align-items-center'>
                                                <rv.Col md={2} xs='2'>
                                                    <div className='justify-content-center icon_degain text-center'>
                                                        <span><BiMoviePlay ></BiMoviePlay></span>
                                                    </div>
                                                </rv.Col>
                                                <rv.Col>
                                                    <div className='icon_text px-2'>
                                                        Movie
                                                    </div>
                                                </rv.Col>
                                            </rv.Row>
                                        </rv.Col>
                                        <rv.Col sm={6} lg={3} xs={6}>
                                            <rv.Row className='line_1 align-items-center'>
                                                <rv.Col md={2} xs='2'>
                                                    <div className='justify-content-center icon_degain text-center'>
                                                        <span><MdSportsSoccer ></MdSportsSoccer></span>
                                                    </div>
                                                </rv.Col>
                                                <rv.Col>
                                                    <div className='icon_text px-2'>
                                                        Sports
                                                    </div>
                                                </rv.Col>
                                            </rv.Row>
                                        </rv.Col>
                                    </rv.Row>
                                </div>
                            </div>
                        </rv.Col>
                    </rv.Row>
                </rv.Container>
            </section >
            {/* ====================================my skills================================================ */}
            <section className='heding_top' id='Skills'>
                <rv.Container>
                    <rv.Row className='pb-5'>
                        <rv.Col md={12} className='heding_sction text-center'>
                            <span>Skills</span>
                            <h2 className='mb-4 '>My Skills</h2>
                            <p>A web developer is responsible for creating the design and layout of a website or web pages. It and can mean working on a brand new website or updating an already existing site.</p>
                        </rv.Col>
                    </rv.Row>
                    <rv.Row className='progress-circle'>
                        <rv.Col lg={4} className='mb-4' >
                            <div className='bg-white rounded-lg shadow p-4 '>
                                <h2 className=' text-center mb-4 fonts_10'>CSS</h2>
                                <div className='progress mx-auto'>
                                    <span className='progress-left'>
                                        <span className='progress-bar  border-primary round'></span>
                                    </span>
                                    <span className='progress-right'>
                                        <span className='progress-bar  border-primary round1'></span>
                                    </span>
                                    <div className='progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center'>
                                        <div className='font_size h2'>
                                            95
                                            <sup className='small h2'>%</sup>
                                        </div>
                                    </div>
                                </div>
                                <rv.Row className='mt-4 text-center'>
                                    <rv.Col lg={6} md={6} sm={6} xs={6} className='border-right' >
                                        <h4 className='mb-0 font_1 '>28%</h4>
                                        <span class="small text-gray">Last week</span>
                                    </rv.Col>
                                    <rv.Col lg={6} md={6} sm={6} xs={6} className='text2'>
                                        <h4 className='mb-0 font_1 '>61%</h4>
                                        <span class="small text-gray">Last month</span>
                                    </rv.Col>
                                </rv.Row>
                            </div>
                        </rv.Col>
                        <rv.Col lg={4} className='mb-4' >
                            <div className='bg-white rounded-lg shadow p-4 '>
                                <h2 className=' text-center mb-4 fonts_10'>HTML</h2>
                                <div className='progress mx-auto'>
                                    <span className='progress-left'>
                                        <span className='progress-bar  border-primary round ' style={{ transform: 'rotate(172deg)' }}></span>
                                    </span>
                                    <span className='progress-right'>
                                        <span className='progress-bar  border-primary round1'></span>
                                    </span>
                                    <div className='progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center'>
                                        <div className='font_size h2'>
                                            98
                                            <sup className='small h2'>%</sup>
                                        </div>
                                    </div>
                                </div>
                                <rv.Row className='mt-4 text-center'>
                                    <rv.Col lg={6} md={6} sm={6} xs={6} className='border-right' >
                                        <h4 className='mb-0 font_1 '>28%</h4>
                                        <span class="small text-gray">Last week</span>
                                    </rv.Col>
                                    <rv.Col lg={6} md={6} sm={6} xs={6} className='text2' >
                                        <h4 className='mb-0 font_1 '>41%</h4>
                                        <span class="small text-gray">Last month</span>
                                    </rv.Col>
                                </rv.Row>
                            </div>
                        </rv.Col>
                        <rv.Col lg={4} className='mb-4' >
                            <div className='bg-white rounded-lg shadow p-4 '>
                                <h2 className=' text-center mb-4 fonts_10'>jQuery</h2>
                                <div className='progress mx-auto'>
                                    <span className='progress-left'>
                                        <span className='progress-bar  border-primary round' style={{ transform: 'rotate(64deg)' }}></span>
                                    </span>
                                    <span className='progress-right'>
                                        <span className='progress-bar  border-primary round1'></span>
                                    </span>
                                    <div className='progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center'>
                                        <div className='font_size h2'>
                                            68
                                            <sup className='small h2'>%</sup>
                                        </div>
                                    </div>
                                </div>
                                <rv.Row className='mt-4 text-center'>
                                    <rv.Col lg={6} md={6} sm={6} xs={6} className='border-right' >
                                        <h4 className='mb-0 font_1 '>28%</h4>
                                        <span class="small text-gray">Last week</span>
                                    </rv.Col>
                                    <rv.Col lg={6} md={6} sm={6} xs={6} className='text2' >
                                        <h4 className='mb-0 font_1 '>61%</h4>
                                        <span class="small text-gray">Last month</span>
                                    </rv.Col>
                                </rv.Row>
                            </div>
                        </rv.Col>
                        <rv.Col lg={4} className='mb-4' >
                            <div className='bg-white rounded-lg shadow p-4 '>
                                <h2 className=' text-center mb-4 fonts_10'>Photoshop</h2>
                                <div className='progress mx-auto'>
                                    <span className='progress-left'>
                                        <span className='progress-bar  border-primary round' style={{ transform: 'rotate(151deg)' }}></span>
                                    </span>
                                    <span className='progress-right'>
                                        <span className='progress-bar  border-primary round1'></span>
                                    </span>
                                    <div className='progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center'>
                                        <div className='font_size h2'>
                                            92
                                            <sup className='small h2'>%</sup>
                                        </div>
                                    </div>
                                </div>
                                <rv.Row className='mt-4 text-center'>
                                    <rv.Col lg={6} md={6} sm={6} xs={6} className='border-right' >
                                        <h4 className='mb-0 font_1 '>28%</h4>
                                        <span class="small text-gray">Last week</span>
                                    </rv.Col>
                                    <rv.Col lg={6} md={6} sm={6} xs={6} className='text2' >
                                        <h4 className='mb-0 font_1 '>41%</h4>
                                        <span class="small text-gray">Last month</span>
                                    </rv.Col>
                                </rv.Row>
                            </div>
                        </rv.Col>
                        <rv.Col lg={4} className='mb-4' >
                            <div className='bg-white rounded-lg shadow p-4 '>
                                <h2 className='text-center mb-4 fonts_10'>WordPress</h2>
                                <div className='progress mx-auto'>
                                    <span className='progress-left'>
                                        <span className='progress-bar  border-primary round' style={{ transform: 'rotate(118deg)' }}></span>
                                    </span>
                                    <span className='progress-right'>
                                        <span className='progress-bar  border-primary round1'></span>
                                    </span>
                                    <div className='progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center'>
                                        <div className='font_size  h2'>
                                            83
                                            <sup className='small h2'>%</sup>
                                        </div>
                                    </div>
                                </div>
                                <rv.Row className='mt-4 text-center'>
                                    <rv.Col lg={6} md={6} sm={6} xs={6} className='border-right'>
                                        <h4 className='mb-0 font_1 '>28%</h4>
                                        <span class="small text-gray">Last week</span>
                                    </rv.Col>
                                    <rv.Col lg={6} md={6} sm={6} xs={6} className='text2'>
                                        <h4 className='mb-0 font_1 '>71%</h4>
                                        <span class="small text-gray">Last month</span>
                                    </rv.Col>
                                </rv.Row>
                            </div>
                        </rv.Col>
                        <rv.Col lg={4} className='mb-4' >
                            <div className='bg-white rounded-lg shadow p-4 '>
                                <h2 className='text-center mb-4 fonts_10'>SEO</h2>
                                <div className='progress mx-auto'>
                                    <span className='progress-left'>
                                        <span className='progress-bar  border-primary round' style={{ transform: 'rotate(162deg)' }}></span>
                                    </span>
                                    <span className='progress-right'>
                                        <span className='progress-bar  border-primary round1'></span>
                                    </span>
                                    <div className='progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center'>
                                        <div className='font_size font-weight-bold h2' >
                                            95
                                            <sup className='small h2'>%</sup>
                                        </div>
                                    </div>
                                </div>
                                <rv.Row className='mt-4 text-center'>
                                    <rv.Col lg={6} md={6} sm={6} xs={6} className='border-right' >
                                        <h4 className='mb-0 font_1 '>28%</h4>
                                        <span class="small text-gray">Last week</span>
                                    </rv.Col>
                                    <rv.Col lg={6} md={6} sm={6} xs={6} className='text2'>
                                        <h4 className='mb-0 font_1 '>61%</h4>
                                        <span class="small text-gray">Last month</span>
                                    </rv.Col>
                                </rv.Row>
                            </div>
                        </rv.Col>
                    </rv.Row>
                </rv.Container>
            </section>

            {/* =====================================================I Am Great At==================================== */}
            <section className='common_padi' id='Great'>
                <rv.Container>
                    <rv.Row>
                        <rv.Col lg={12} className='text-center top_heading mb-5'>
                            <span className='common_class'>I AM GRAT AT</span>
                            <h2 class="mb-4">We do awesome services for our clients</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </rv.Col>
                    </rv.Row>
                    <rv.Row>
                        <rv.Col md='6' lg='3'>
                            <div className='service  rounded-lg'>
                                <div className='logo d-flex justify-content-center align-items-center'>
                                    <span><SiAntdesign className='iconsss'></SiAntdesign></span>
                                </div>
                                <div className='text_body'>
                                    <h3 class="mb-3">Web Design</h3>
                                    <p>Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience</p>
                                </div>
                            </div>
                        </rv.Col>
                        <rv.Col md='6' lg='3'>
                            <div className='service rounded-lg'>
                                <div className='logo d-flex justify-content-center align-items-center'>
                                    <span><CiMobile3 className='iconsss'></CiMobile3></span>
                                </div>
                                <div className='text_body'>
                                    <h3 class="mb-3">Web Application</h3>
                                    <p>A web application (web app) is an application program that is stored on a remote server and delivered over the internet through a browser interface.</p>
                                </div>
                            </div>
                        </rv.Col>
                        <rv.Col md='6' lg='3'>
                            <div className='service rounded-lg'>
                                <div className='logo d-flex justify-content-center align-items-center'>
                                    <span><CgWebsite className='iconsss'></CgWebsite></span>
                                </div>
                                <div className='text_body'>
                                    <h3 class="mb-3">Web Development</h3>
                                    <p>Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management.</p>
                                </div>
                            </div>
                        </rv.Col>
                        <rv.Col md='6' lg='3'>
                            <div className='service rounded-lg'>
                                <div className='logo d-flex justify-content-center align-items-center'>
                                    <span><SiMaterialdesignicons className='iconsss'></SiMaterialdesignicons></span>
                                </div>
                                <div className='text_body'>
                                    <h3 class="mb-3">Banner Design</h3>
                                    <p>Log into Visme and choose your banner type, whether a social media or website banner. Add images and graphics into your designs or use the ones provided in the left-hand panel.</p>
                                </div>
                            </div>
                        </rv.Col>
                    </rv.Row>
                    <rv.Row>
                        <rv.Col md='6' lg='3'>
                            <div className='service  rounded-lg'>
                                <div className='logo d-flex justify-content-center align-items-center'>
                                    <span><MdOutlineDisplaySettings className='iconsss'></MdOutlineDisplaySettings></span>
                                </div>
                                <div className='text_body'>
                                    <h3 class="mb-3">Branding</h3>
                                    <p>Branding is the process of creating the brand identity of a company. This process also delivers materials that support the brand, like a logo, tagline, visual design, or tone of voice.</p>
                                </div>
                            </div>
                        </rv.Col>
                        <rv.Col md='6' lg='3'>
                            <div className='service rounded-lg'>
                                <div className='logo d-flex justify-content-center align-items-center'>
                                    <span><GiFalconMoon className='iconsss'></GiFalconMoon></span>
                                </div>
                                <div className='text_body'>
                                    <h3 class="mb-3">Icon Design</h3>
                                    <p>Icon design is the process of designing a graphic symbol that represents some real, fantasy or abstract motive, entity or action. In the context of software applications,</p>
                                </div>
                            </div>
                        </rv.Col>
                        <rv.Col md='6' lg='3'>
                            <div className='service rounded-lg'>
                                <div className='logo d-flex justify-content-center align-items-center'>
                                    <span><GiHillConquest className='iconsss'></GiHillConquest></span>
                                </div>
                                <div className='text_body'>
                                    <h3 class="mb-3">Graphic Design</h3>
                                    <p>Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers .</p>
                                </div>
                            </div>
                        </rv.Col>
                        <rv.Col md='6' lg='3'>
                            <div className='service rounded-lg'>
                                <div className='logo d-flex justify-content-center align-items-center'>
                                    <span><BsSearchHeart className='iconsss'></BsSearchHeart></span>
                                </div>
                                <div className='text_body'>
                                    <h3 class="mb-3">SEO</h3>
                                    <p>SEO - Search engine optimization: the process of making your site better for search engines. Also the job title of a person who does this for a living: We just hired a new SEO </p>
                                </div>
                            </div>
                        </rv.Col>
                    </rv.Row>
                </rv.Container>
            </section>
            {/* ===========================project on mind=========================================== */}
            <section className='bg_color_project'>
                <rv.Container>
                    <rv.Row>
                        <rv.Col lg={8} md={8} >
                            <div className='py-4'>
                                <h2>Have a project on your mind.</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly.</p>
                                <a href="#" class="btn btn-white py-3 px-4">Contact me</a>
                            </div>
                        </rv.Col>
                        <rv.Col lg={4} md={4} className='imageee' >
                            <img src={require('./image/raj1.png')} className='img-fluid'></img>
                        </rv.Col>
                    </rv.Row>
                </rv.Container>
            </section>
            {/* -============================over project========================================= */}
            <section className='projrct_conten' id='Project' >
                <div className='container_fluid px-md-4'>
                    <rv.Row className='pb-5'>
                        <rv.Col md='12 text-center'>
                            <span class="common_class">Accomplishments</span>
                            <h2 class="mb-4 common_h2">Our Projects</h2>
                            <p className='common_P'>These are our projects and our company project that we have designed ourselves</p>
                        </rv.Col>
                    </rv.Row>
                    <rv.Row>
                        <rv.Col md={3}>
                            <div className='project bg_img_over shadow justify-content-center align-items-center d-flex'>
                                <div class="overlay"></div>
                                <div className='text text-center p-4'>
                                    <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                    <span>Web Design</span>
                                </div>
                            </div>
                        </rv.Col>
                        <rv.Col md={3}> <div className='project bg_img_over0  shadow justify-content-center align-items-center d-flex'  >
                            <div class="overlay"></div>
                            <div className='text text-center p-4'>
                                <h3><a target='_blank' href="https://rajwebsite-1.netlify.app/">Branding &amp; Illustration Design</a></h3>
                                <span>Web Design</span>
                            </div>
                        </div></rv.Col>
                        <rv.Col md={3}> <div className='project bg_img_over1 shadow justify-content-center align-items-center d-flex'>
                            <div class="overlay"></div>
                            <div className='text text-center p-4'>
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                <span>Web Design</span>
                            </div>
                        </div></rv.Col>
                        <rv.Col md={3}> <div className='project bg_img_over2 shadow justify-content-center align-items-center d-flex'>
                            <div class="overlay"></div>
                            <div className='text text-center p-4'>
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                <span>Web Design</span>
                            </div>
                        </div></rv.Col>
                        <rv.Col md={3}> <div className='project bg_img_over3 shadow justify-content-center align-items-center d-flex'>
                            <div class="overlay"></div>
                            <div className='text text-center p-4'>
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                <span>Web Design</span>
                            </div>
                        </div></rv.Col>
                        <rv.Col md={3}> <div className='project bg_img_over4 shadow justify-content-center align-items-center d-flex'>
                            <div class="overlay"></div>
                            <div className='text text-center p-4'>
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                <span>Web Design</span>
                            </div>
                        </div></rv.Col>
                        <rv.Col md={3}> <div className='project bg_img_over5 shadow justify-content-center align-items-center d-flex'>
                            <div class="overlay"></div>
                            <div className='text text-center p-4'>
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                <span>Web Design</span>
                            </div>
                        </div></rv.Col>
                        <rv.Col md={3}> <div className='project bg_img_over6 shadow justify-content-center align-items-center d-flex'>
                            <div class="overlay"></div>
                            <div className='text text-center p-4'>
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                <span>Web Design</span>
                            </div>
                        </div></rv.Col>
                    </rv.Row>
                </div>
            </section>
            {/* ========================================client about===================================== */}
            <section className='bg_color_client'>
                <rv.Container>
                    <rv.Row className='pb-5'>
                        <rv.Col lg='12' className='text-center indext'>
                            <span class="common_class">Testimonies</span>
                            <h2 class="mb-4 common_h2 raj">What client says about?</h2>
                            <p className=''>All these palnts are currently in my company and are currentiy wroking on all projects</p>
                        </rv.Col>
                    </rv.Row>
                    <rv.Row>
                        <rv.Col md='12'>
                            <OwlCarousel loop='true' autoplayTimeout={5000} responsive={{
                                0: {
                                    items: 1,
                                },
                                600: {
                                    items: 2,
                                    center: true,
                                },
                                1000: {
                                    items: 3,
                                },
                            }}  >
                                <div className="item " >
                                    <div className='main_card py-4'>
                                        <div className='card_text'>
                                            <div>
                                                <span><FaQuoteRight></FaQuoteRight></span>
                                                <p class="mb-4 pl-5">
                                                    I went to Thrive with a basic “feel” I wanted in a website. They helped flush
                                                    out the visual layout and content. Milan services are bargain when you weigh
                                                    the cost versus the product you receive. Thanks again!.</p>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <div className='imd_bg_client'></div>
                                                <div className='pl-3 last'>
                                                    <p class="name">Roger Scott</p>
                                                    <h5 class="lastsec">Marketing Manager</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='main_card py-4'>
                                        <div className='card_text'>
                                            <span><FaQuoteRight></FaQuoteRight></span>
                                            <p class="mb-4 pl-5">
                                                My new site created by Milan just launched.They met all of my expectations and
                                                had a lot of insight regarding marketing tools I didn’t know existed.!.</p>
                                            <div className='d-flex align-items-center'>
                                                <div className='imd_bg_client1'></div>
                                                <div className='pl-3 last'>
                                                    <p class="name">Roger Scott</p>
                                                    <h5 class="lastsec">Marketing Manager</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='main_card py-4'>
                                        <div className='card_text'>
                                            <span><FaQuoteRight></FaQuoteRight></span>
                                            <p class="mb-4 pl-5">
                                                Very good communication and appropriate timing for the service provided. Very
                                                high quality of work, we will probably contact them again if there is an
                                                opportunity!.</p>
                                            <div className='d-flex align-items-center'>
                                                <div className='imd_bg_client2'></div>
                                                <div className='pl-3 last'>
                                                    <p class="name">Roger Scott</p>
                                                    <h5 class="lastsec">Marketing Manager</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </rv.Col>
                    </rv.Row>
                </rv.Container>
            </section>

            {/* =================================CONTACT us========================= */}

            <section className='padirng-7' id='Contact' >
                <rv.Container>
                    <rv.Row className='justify-content-center mb-5 pb-3 '>
                        <rv.Col md='7' className='contact_text text-center'>
                            <span class="common_class">contact us</span>
                            <h2 className='abouth2 mb-4'>Have a Project?</h2>
                            <p className='aboutp'>If You Have a Project You Can Fill This Form</p>
                        </rv.Col>
                    </rv.Row>
                    <rv.Row>
                        <rv.Col md='8'>
                            <form className='from_table p-4 p-md-5 bg_light11'>
                                <rv.Row>
                                    <rv.Col md='6' className='mb-3'>
                                        <input type="text" class="form-control" placeholder="Your Name"></input>
                                    </rv.Col>
                                    <rv.Col md='6 mb-3'>
                                        <input type="text" class="form-control" placeholder="Your Name"></input>
                                    </rv.Col>
                                    <rv.Col md='12 mb-3'>
                                        <input type="text" class="form-control" placeholder="Your Name"></input>
                                    </rv.Col>
                                    <rv.Col md='12 mb-3'>
                                        <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                                    </rv.Col>
                                    <rv.Col md='12'>
                                        <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"></input>
                                    </rv.Col>
                                </rv.Row>
                            </form>
                        </rv.Col>
                        <rv.Col md='4' className='py-5'>
                            <rv.Row>
                                <rv.Col xs={2}>
                                    <div className='social_icon d-flex justify-content-center'>
                                        <span ><MdLocationOn></MdLocationOn></span>
                                    </div>

                                </rv.Col>
                                <rv.Col xs={10}>
                                    <div className='social_text  pb-4 ps-4 ps-xs-0 ps-lg-0'>
                                        <p><div className='om'><span>Address:</span></div> <div style={{ color: "#999999", fontSize: "17px" }} >D-202,sanweli Abc school ni pase ,Jgatnaka Srthana,surat</div></p>
                                    </div>
                                </rv.Col>
                            </rv.Row>
                            <rv.Row>
                                <rv.Col xs={2}>
                                    <div className='social_icon d-flex justify-content-center'>
                                        <span ><MdAddIcCall></MdAddIcCall></span>
                                    </div>

                                </rv.Col>
                                <rv.Col xs={10}>
                                    <div className='social_text  pb-4 ps-xs-0 ps-4 ps-lg-0'>
                                        <p ><div className='om'><span>Phone:</span></div> <div style={{ color: "#999999", fontSize: "17px" }} >+91 99984 77108</div></p>
                                    </div>
                                </rv.Col>
                            </rv.Row>
                            <rv.Row>
                                <rv.Col xs={2}>
                                    <div className='social_icon d-flex justify-content-center'>
                                        <span ><SiMinutemailer></SiMinutemailer></span>
                                    </div>

                                </rv.Col>
                                <rv.Col xs={10}>
                                    <div className='social_text  pb-4 ps-xs-0 ps-4 ps-lg-0'>
                                        <p><div className='om'><span>Email::</span></div> <div style={{ color: "#999999", fontSize: "17px" }} >rajgami999@gmail.com</div></p>
                                    </div>
                                </rv.Col>
                            </rv.Row>
                            <rv.Row>
                                <rv.Col xs={2}>
                                    <div className='social_icon d-flex justify-content-center'>
                                        <span ><SiWebmoney></SiWebmoney></span>
                                    </div>

                                </rv.Col>
                                <rv.Col xs={10}>
                                    <div className='social_text  pb-4 ps-xs-0 ps-4 ps-lg-0'>
                                        <p><div className='om'><span>Website:</span></div><div style={{ color: "#999999", fontSize: "17px" }} > No Website</div></p>
                                    </div>
                                </rv.Col>
                            </rv.Row>
                        </rv.Col>
                    </rv.Row>
                </rv.Container>
            </section>
            {/* ===============================footer================================= */}
            <footer>
                <rv.Container>
                    <rv.Row>
                        <rv.Col md>
                            <div className='footer'>
                                <h2>Lets talk about</h2>
                                <p>I am available for freelance work. Connect with me via and call in to my account.provides you with a customized website design that's perfect for your business or personal site.</p>
                                <p><a href="#" class="btn btn-primary">Learn more</a></p>
                            </div>
                        </rv.Col>
                        <rv.Col md>
                            <div className='sec2 mb-4 ml-md-4'>
                                <h2>Links</h2>
                                <ul class="list_type p-0">
                                    <li><a href="#"><span><AiOutlineRight></AiOutlineRight></span>Home</a></li>
                                    <li><a href="#"><span><AiOutlineRight></AiOutlineRight></span>About</a></li>
                                    <li><a href="#"><span><AiOutlineRight></AiOutlineRight></span>Services</a></li>
                                    <li><a href="#"><span><AiOutlineRight></AiOutlineRight></span>Projects</a></li>
                                    <li><a href="#"><span><AiOutlineRight></AiOutlineRight></span>Contact</a></li>
                                </ul>
                            </div>
                        </rv.Col>
                        <rv.Col md>
                            <div className='sec3'>
                                <h2>services</h2>
                                <ul class="list_type p-0">
                                    <li><a href="#"><span><AiOutlineRight></AiOutlineRight></span>Web Design</a></li>
                                    <li><a href="#"><span><AiOutlineRight></AiOutlineRight></span>Web Development</a></li>
                                    <li><a href="#"><span><AiOutlineRight></AiOutlineRight></span>Business Strategy</a></li>
                                    <li><a href="#"><span><AiOutlineRight></AiOutlineRight></span>Cotent Writing </a></li>
                                    <li><a href="#"><span><AiOutlineRight></AiOutlineRight></span>logo Design</a></li>
                                </ul>
                            </div>
                        </rv.Col>
                        <rv.Col md>
                            <div className='lastsec'>
                                <h2>Have a Questions?</h2>
                                <div className='rajgami'>
                                    <ul class="list_type p-0">
                                        <li><a href="#" className='d-flex'><span className='iconflet'><FaBookOpen></FaBookOpen></span>	D-202,sanweli Abc school ni pase ,Jgatnaka Srthana,surat</a></li>
                                        <li><a href="#" className='d-flex'><div className='icon20'><MdAddIcCall></MdAddIcCall></div>+91 99984 77108</a></li>
                                        <li><a href="#" className='d-flex'><div className='icon20'><SiMinutemailer></SiMinutemailer></div>	rajgami999@gmail.com</a></li>
                                    </ul>
                                </div>
                                <ul className='iconsocial d-flex p-0'>
                                    <li><a href="https://www.linkedin.com/in/raj-gami-434495263/" target='_blank'><BsLinkedin className='co'></BsLinkedin></a></li>
                                    <li><a href="https://www.facebook.com/profile.php?id=100032433589950" target='_blank'><BsFacebook className='co'></BsFacebook></a></li>
                                    <li><a href="https://www.instagram.com/_raj_gami_999_/" target='_blank'><FaInstagram className='co'></FaInstagram></a></li>
                                </ul>
                            </div>
                        </rv.Col>
                    </rv.Row>
                </rv.Container>
            </footer>
        </>
    );
}



export default App;
