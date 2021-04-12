import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';

import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
  

const RegisterMandor = ({ history }) => {
  const ScrollTop = ({ children, location }) => {
    React.useEffect(() => window.scrollTo(0, 0), [location])
    return children
  }


  return (
    <div>
      <Efect/>
      <Efect1/>
      <Efect2/>
      <ScrollTop>
      <div className="jumbotron head"/>
            <Reveal effect="fadeInUp">
            <div>
            <div className="form-center">
              <form className="formcontact">
                <label>Nama</label>
                <input type="text" name="mandor_name" required />
                <label>Nama Tukang</label>
                <input type="text" name="mandor_tukang" required />
                <label>Password</label>
                <input type="password" name="mandor_password" required />
                <label>Konfirmasi Password</label>
                <input type="password" name="mandor_confirm_password" required />
                <label>Nomor Telpon</label>
                <input type="phone" name="mandor_phone" required />
                <label>Lokasi</label>
                <textarea name="mandor_address" required />
                <label>Harga Jasa</label>
                <input type="number" name="mandor_price" required />
                <button type="submit" id='buttonsent'>
                  <span className="shine"></span>
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
          </Reveal>
      <Footer />
    </ScrollTop>
    </div>
  );
};

export default withRouter(RegisterMandor);
