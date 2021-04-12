import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';

import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
  

const RegisterVendor = ({ history }) => {
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
                <label>Nama Vendor</label>
                <input type="text" name="vendor_name" required />
                <label>Password</label>
                <input type="password" name="vendor_password" required />
                <label>Konfirmasi Password</label>
                <input type="password" name="vendor_confirm_password" required />
                <label>Nomor Telpon</label>
                <input type="phone" name="vendor_phone" required />
                <label>Alamat Kantor</label>
                <textarea name="vendor_address" required />
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

export default withRouter(RegisterVendor);
