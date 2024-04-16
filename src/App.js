import React, { useEffect, useRef } from "react";
import "./App.css";
import pannel_home from "./images/panel_home.png";


export default function App() {

  // const navMenu = useRef(null);
  // const navToggle = useRef(null);
  // const navClose = useRef(null);
  // const navLinks = useRef(null);
  // const scrollUp = useRef(null);
  // const header = useRef(null);

  // const addRef = (el) => {
  //   if (el && !navLinks.current.includes(el)) {
  //     navLinks.current.push(el);
  //   }
  // };

  // useEffect(() => {
  //   if (navToggle.current) {
  //     navToggle.current.addEventListener("click", () => {
  //       navMenu.current.classList.add("show-menu");
  //     });
  //   }

  //   if (navClose.current) {
  //     navClose.current.addEventListener("click", () => {
  //       navMenu.current.classList.remove("show-menu");
  //     });
  //   }

  //   navLinks.current.forEach((n) => {
  //     n.addEventListener("click", () => {
  //       navMenu.current.classList.remove("show-menu");
  //     });
  //   });

  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY >= 350) {
  //       scrollUp.current.classList.add("show-scroll");
  //     } else {
  //       scrollUp.current.classList.remove("show-scroll");
  //     }

  //     if (window.scrollY >= 50) {
  //       header.current.classList.add("blur-header");
  //     } else {
  //       header.current.classList.remove("blur-header");
  //     }
    // });
  // }, []);

  return(
    <>
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.1.0/remixicon.min.css"/>
      </head>

      <header className="header" id="header">
         <nav className="nav container">
            <a href="#" className="nav__logo">
               <i className="ri-flashlight-line"></i>
               Eythor
            </a>

            <div className="nav__menu" id="nav-menu">
               <ul className="nav__list">
                    <li className="nav__item">
                       <a href="#home" className="nav__link active-link">Home</a>
                    </li>
                    <li className="nav__item">
                       <a href="#about" className="nav__link">About</a>
                    </li>
                    <li className="nav__item">
                       <a href="#team" className="nav__link">Team</a>
                    </li>
                    <li className="nav__item">
                       <a href="#contact" className="nav__link">Contact</a>
                    </li>
               </ul>
               <div className="nav__close" id="nav-close">
                  <i className="ri-close-line"></i>
              </div>
            </div>
            <div className="nav__actions">
               <div className="nav__toggle" id="nav-toggle">
                  <i className="ri-menu-line"></i>
               </div>
            </div>
         </nav>
      </header>

      <main className="main">
         <section className="home section" id="home">
            <div className="home__container container grid">
               <img src= {pannel_home} alt="home" className="home__img"/>
               <div className="home__data">
                  <h1 className="home__title">
                     Eythor
                  </h1>
                  <p className="home__description">
                     Providing Smart Solar Panel Cleaning Robots
                  </p>
                  <div className="home__button">
                     <a href="#about" className="button">
                        <span>
                           <i className="ri-arrow-right-line"></i>
                        </span>
                        Know More
                     </a>
                     <a href="#" className="button__link">Contact Us</a>
                  </div>
               </div>
            </div>
            
         </section>

         <section className="about section" id="about">
            <div className="about__data">
               <h2 className="section__title about__title">
                  SMART SOLAR PANEL CLEANING ROBOTS
               </h2>
               <p className="about__description">
                  As a new type of cleaning energy, solar power generation is developing rapidly all over the world. However, because solar power stations are usually built on higher terrain, where sunshine is sufficient, but there is a lot of wind and sand, and water resources are scarce.Therefore, it is easy to accumulate dust and dirt on solar panels,and the power generation efficiency can be reduced by 8%-30% on average.The hot spot problem of photovoltaic panels caused by dust also greatly reduces the service life of photovoltaic panels.
                  <br/><br/>
                  <i className="ri-check-double-line"></i>The automatic cleaning method for small smart devices is designed according to the basic specifications of photovoltaic panels. It is suitable for most photovoltaic panel installations, with strong adaptability, high cleaning efficiency, and flexible cleaning cycles.
                  <br/><br/>
                  <i className="ri-check-double-line"></i>The manual cleaning method for large-scale equipment has high cleaning efficiency and is only suitable for large-scale photovoltaic power plants with excellent geographical environment, and the cleaning cost is high.
                  <br/><br/>
                  Based on this, our company has selected an automatic cleaning method for small smart equipment and independently devloping a small smart photovoltaic cleaning robot to serve the photovoltaic energy industry
               </p>
            </div>
            <div className="about__container container grid">
               <div className="about__content grid">
                  <article className="about__card">
                     <i className="ri-macbook-line"></i>
                     <h2 className="about__title">Intelligent control</h2>
                     <p className="about__para">Web app control by mobile, automatic cleaning time and cleaning mode can be set</p>
                  </article>
                  <article className="about__card">
                     <i className="ri-battery-charge-line"></i>
                     <h2 className="about__title">Solar power system</h2>
                     <p className="about__para">Self-charging-comes with a solar power system, convenient and efficient, can last 8-10 hours</p>
                  </article>
                  <article className="about__card">
                     <i className="ri-upload-cloud-line"></i>
                     <h2 className="about__title">Internet of things technology application</h2>
                     <p className="about__para">Independent control, grouping, automatic cleaning</p>
                  </article>
                  <article className="about__card">
                     <i className="ri-instance-line"></i>
                     <h2 className="about__title">Strong adaptability</h2>
                     <p className="about__para">Applicable to various arrangement arrays and various power stations</p>
                  </article>
                  <article className="about__card">
                     <i className="ri-tools-line"></i>
                     <h2 className="about__title">1 min disassembly and assembly of brushes</h2>
                     <p className="about__para">Applicable to various arrangement arrays and various power stations</p>
                  </article>
                  <article className="about__card">
                     <i className="ri-arrow-up-down-line"></i>
                     <h2 className="about__title">Adjusting the brush up and down</h2>
                     <p className="about__para">When the brush wears out, the cleaning ability decreases. Adjust the brush downward to increase cleaning ability and double the brush's service life.</p>
                  </article>
               </div>
            </div>
         </section>

         <section className="team section" id="team">
             <h2 className="section__title">
               The Team
             </h2>
             <div className="team__container container grid">
               <article className="team__card">
                  <img src="assets/img/shop-cactus-1.png" alt="" className="team__img"/>
                  <h3 className="team__title">Naveen</h3>
                  <span className="team__subtitle">Founder</span>
                  <a href="#" className="team__button">
                     <i className="ri-linkedin-box-line"></i>
                  </a>
               </article>
               <article className="team__card">
                  <img src="#" alt="" className="team__img"/>
                  <h3 className="team__title">Lucky Rana</h3>
                  <span className="team__subtitle">Co-Founder</span>
                  <a href="#" className="team__button">
                     <i className="ri-linkedin-box-line"></i>
                  </a>
               </article>
               <article className="team__card">
                  <img src="#" alt="" className="team__img"/>
                  <h3 className="team__title">Nitish Kumar</h3>
                  <span className="team__subtitle">Software Developer</span>
                  <a href="#" className="team__button">
                     <i className="ri-linkedin-box-line"></i>
                  </a>
               </article>
               <article className="team__card">
                  <img src="#" alt="" className="team__img"/>
                  <h3 className="team__title">Abhigyan Adarsh</h3>
                  <span className="team__subtitle">Embedded Circuit Designer</span>
                  <a href="#" className="team__button">
                     <i className="ri-linkedin-box-line"></i>
                  </a>
               </article>
               <article className="team__card">
                  <img src="#" alt="" className="team__img"/>
                  <h3 className="team__title">Divya Balchandani</h3>
                  <span className="team__subtitle">Product Designer in CAD</span>
                  <a href="#" className="team__button">
                     <i className="ri-linkedin-box-line"></i>
                  </a>
               </article>
             </div>
         </section>

         <section className="contact section" id="contact">
            <h2 className="section__title">
               Contact Us
            </h2>
            <div className="contact__container container grid">
               <div className="contact__content">
                  <div>
                     <h3 className="contact__title">
                        Write to us
                     </h3>
                     <div>
                        <div className="contact__social">
                           <a href="" target="_blank">
                              <i className="ri-instagram-line"></i>
                           </a>
                           <a href="" target="_blank">
                              <i className="ri-discord-line"></i>
                           </a>
                           <a href="mailto:business.eythor@gmail.com" target="_blank">
                              <i className="ri-mail-line"></i>
                           </a>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
            
         </section>
      </main>

      <footer className="footer">
         <div className="footer__container container grid">
            <div>
               {/* <a href="" className="footer__logo">
                  <i className="ri-flashlight-line"></i>
               </a> */}
               <p className="footer__description">
               <i className="ri-flashlight-line"></i>

                  Eythor is developing a small smart photovoltaic cleaning robot to serve the photovoltaic energy industry.
               </p>
            </div>

            <div className="footer__content grid">
            <div className="footer__data">
              <h3 className="footer__title">Services</h3>
              <ul>
                <li><a href="#home" className="footer__link">Home</a></li>
                <li><a href="#about" className="footer__link">About</a></li>
                <li><a href="#team" className="footer__link">Team</a></li>
                <li><a href="#contact" className="footer__link">Contact</a></li>
              </ul>
            </div>
            <div className="footer__data">
              <h3 className="footer__title">Contact Info</h3>
              <ul>
                <li>Eythor, Inc.</li>
                <li>1234 Solar Way</li>
                <li>business.eythor@gmail.com</li>
              </ul>
            </div>
            <div className="footer__data">
              <h3 className="footer__title">Follow Us</h3>
              <div className="footer__social">
                <a href="" target="_blank"><i className="ri-instagram-line"></i></a>
                <a href="" target="_blank"><i className="ri-discord-line"></i></a>
                <a href="mailto:business.eythor@gmail.com" target="_blank"><i className="ri-mail-line"></i></a>
              </div>
            </div>
            </div>
         </div>
      </footer>

      <a href="#" class="scrollup" id="scroll-up">
         <i class="ri-arrow-up-line"></i>
      </a>
    </>
  );
}
  const scrollRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current.scrollLeft += 1;
      if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
        scrollRef.current.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={scrollRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <div className="about__container container grid">
               <div className="about__content grid">
                  <article className="about__card">
                     <i className="ri-macbook-line"></i>
                     <h2 className="about__title">Intelligent control</h2>
                     <p className="about__para">Web app control by mobile, automatic cleaning time and cleaning mode can be set</p>
                  </article>
                  <article className="about__card">
                     <i className="ri-battery-charge-line"></i>
                     <h2 className="about__title">Solar power system</h2>
                     <p className="about__para">Self-charging-comes with a solar power system, convenient and efficient, can last 8-10 hours</p>
                  </article>
                  <article className="about__card">
                     <i className="ri-upload-cloud-line"></i>
                     <h2 className="about__title">Internet of things technology application</h2>
                     <p className="about__para">Independent control, grouping, automatic cleaning</p>
                  </article>
                  <article className="about__card">
                     <i className="ri-instance-line"></i>
                     <h2 className="about__title">Strong adaptability</h2>
                     <p className="about__para">Applicable to various arrangement arrays and various power stations</p>
                  </article>
                  <article className="about__card">
                     <i className="ri-tools-line"></i>
                     <h2 className="about__title">1 min disassembly and assembly of brushes</h2>
                     <p className="about__para">Applicable to various arrangement arrays and various power stations</p>
                  </article>
                  <article className="about__card">
                     <i className="ri-arrow-up-down-line"></i>
                     <h2 className="about__title">Adjusting the brush up and down</h2>
                     <p className="about__para">When the brush wears out, the cleaning ability decreases. Adjust the brush downward to increase cleaning ability and double the brush's service life.</p>
                  </article>
               </div>
            </div>
    </div>
  );

// Remove the invalid code block
// }...}

