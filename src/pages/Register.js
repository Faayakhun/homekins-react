import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';

import {
  LinkWrap,
  Overlay
} from "../styles/Work.styles";

import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
  

const Register = ({ history }) => {
const [toCase, setCase] = useState("");
const [coord, setCoords] = useState();

useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase);
      }, 600);
  }, [toCase, history]);


  const handleCaseSwap = (e, uri) =>
    e.x < coord + 15 && e.x > coord - 15 && setCase(uri);

  return (
    <div>
      <Efect/>
      <Efect1/>
      <Efect2/>

      <div className="jumbotron head"/>

      <Reveal effect="fadeInUp">
       <section className='container-fluid pb-0'>
          <div className='row m-2-hor'>
            <div className='col-md-12'>
              <h1 className="heading mt-5">Please Select Your Role </h1>
            </div>
          </div>
       </section>
      </Reveal>

       <Reveal effect="fadeInUp">
       <section className='container-fluid'>
          <div className='row m-2-hor'>

            <div className='col-md-4 slick slicknews p-3 mb-0'>
              <div className='slick-slide d-block'>
                <div className='mr-0'>
                  <div className='itm mr-0'>
                    <LinkWrap active={toCase === "/registervendor"}>
                    <Overlay active={!!toCase} onMouseDown={e => setCoords(e.nativeEvent.x)}
                      onMouseUp={e => handleCaseSwap(e.nativeEvent, "/registervendor")}>
                        <div className='bg'>
                          <img
                            src="./img/news/img1.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className='desc'>
                          <div className='name'>Vendor</div>
                          <div className='content'>
                            Bergabunglah dengan list vendor kami untuk mendapatkan 
                            jangkauan pemasaran lebih luas
                          </div>
                        </div>
                        <div className='icon'>
                           <span>
                            Register
                          </span>
                        </div>
                    </Overlay>
                  </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4 slick slicknews p-3 mb-0'>
              <div className='slick-slide d-block'>
                <div className='mr-0'>
                  <div className='itm mr-0'>
                    <LinkWrap active={toCase === "/registermandor"}>
                    <Overlay active={!!toCase} onMouseDown={e => setCoords(e.nativeEvent.x)}
                      onMouseUp={e => handleCaseSwap(e.nativeEvent, "/registermandor")}>
                        <div className='bg'>
                          <img
                            src="./img/news/img2.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className='desc'>
                          <div className='name'>Mandor</div>
                          <div className='content'>
                            Perkenalkan jasa anda ke komunitas kami untuk mendapatkan 
                            customer baru yang potensial
                          </div>
                        </div>
                        <div className='icon'>
                           <span>
                            Register
                          </span>
                        </div>
                    </Overlay>
                  </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4 slick slicknews p-3 mb-0'>
              <div className='slick-slide d-block'>
                <div className='mr-0'>
                  <div className='itm mr-0'>
                    <LinkWrap active={toCase === "/registeruser"}>
                    <Overlay active={!!toCase} onMouseDown={e => setCoords(e.nativeEvent.x)}
                      onMouseUp={e => handleCaseSwap(e.nativeEvent, "/registeruser")} >
                        <div className='bg'>
                          <img
                            src="./img/news/img3.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className='desc'>
                          <div className='name'>Customer</div>
                          <div className='content'>
                            Daftar di situs kami untuk mendapatkan akses penuh dalam memenuhi
                            kebutuhan anda.
                          </div>
                        </div>
                        <div className='icon'>
                           <span>
                            Register
                          </span>
                        </div>
                    </Overlay>
                  </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            

          </div>
       </section>
       </Reveal>

      <Footer />

    </div>
    
  );
};

export default withRouter(Register);
