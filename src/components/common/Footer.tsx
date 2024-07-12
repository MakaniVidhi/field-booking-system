import React from 'react'
import { Instagram, Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import "../../assets/CSS/Footer.css"
function Footer() {
  return (
    <>
    <section className="info_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_contact">
            <h4>
              Address
            </h4>
            <div className="contact_link_box">
              <a >
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span>
                  Location
                </span>
              </a>
              <a >
                <i className="fa fa-phone" aria-hidden="true" />
                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a >
                <i className="fa fa-envelope" aria-hidden="true" />
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="info_social row g-1">
            <Facebook />
            <Instagram />
            <LinkedIn />
            <Twitter />

          </div>
        </div>
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_detail">
            <h4>
              Info
            </h4>
            <p>
              necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-2 mx-auto info_col">
          <div className="info_link_box">
            <h4>
              Links
            </h4>
            <div className="info_links">
              <a>
                Home
              </a>
              <a>
                About
              </a>
              <a >
                Services
              </a>
              <a>
                Why Us
              </a>
              <a>
                Team
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 info_col ">
          <h4>
            Subscribe
          </h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
    <section className="footer_section">
    <div className="container">
      <p>
        © <span id="displayYear" /> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>  
    </div>
  </section>   
  </>
  )
}

export default Footer;
