import React from 'react'
// import styles from './Footer.module.css'
import { MdEmail, MdStars } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaTwitter, FaCcMastercard, FaMaxcdn } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { IoIosArrowUp } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { RiVisaLine } from "react-icons/ri";
import { TbBrandAirbnb, TbBrandAngular, TbBrandAmongUs,  TbBrandAws } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="" >
      <footer className='footer-top-strip px-5'style={{backgroundColor: '#313131'}}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 px-5 py-4">
              <img className='img-fluid' width={140} height={32} src="../public/jumia-logo-white.png" alt="" />
            </div>
            <div className="col-6 px-5 py-4">
              <h6 className='text-white left-text-header'>New to Jumia?</h6>
              <p className='text-white left-text-content'>
                Subscribe to our newsletter to get updates on our latest offers!
              </p>
              <div className='d-flex align-items-center'>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                  <MdEmail className='fs-4' color='#a3a3a6' /></span>
                  <input type="text" className="form-control py-3" placeholder="Enter E-mail Address" aria-label="Enter E-mail Address" aria-describedby="basic-addon2" />
                </div>
                <button type="button" className="btn fw-semibold text-white px-4 py-3">Male</button> 
                <button type="button" className="btn fw-semibold text-white px-4 py-3">Female</button> 
              </div>   
            </div>
            <div className="col-4 px-5 py-4">
              <div className="d-flex align-items-start g-10">
                <div className="star-box d-flex align-items-center justify-content-center">
                  <MdStars width={32} height={32} className='m-1 fs-1 text-white' />
                </div>
                <div className="left-text">
                  <h6 className='text-white left-text-header'>New to Jumia?</h6>
                  <p className='text-white left-text-content'>
                    Get access to exclusive offers!
                  </p>
                </div>
              </div>
              <div>
                <img className='img-fluid me-2' width={120} height={82} src="./../../public/app-store.png" alt="" />

                <img className='img-fluid' width={120} height={32} src="./../../public/google-play.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom-strip px-5" style={{ background: '#474747'}}>
        <div className="container-xxl">
          <div className="row py-2 footer-border">
            <div className="col-3 pe-5 py-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>NEED HELP?</h4>
              <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Chat with us
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Help Center
                </a>
                <a className='text-white footer-link ' href='/contact'style={{textDecorationLine:'none'}}>
                  Contact Us
                </a>
              </div>

              <h4 className='text-white ps-5 mb-1 left-text-header'>USEFUL LINKS</h4>
              <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Service Center
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  How to shop on Jumia?
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Delivery options and timelines
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  How to return a product on Jumia?
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Corporate and bulk purchases
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Report a Product
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Ship your package anywhere in Egypt
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Dispute Resolution Policy
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Returns & Refund Timeline
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Return Policy
                </a>
              </div>
            </div>
            <div className="col-3 pe-5 py-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>ABOUT JUMIA</h4>
              <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                <a className='text-white footer-link ' href ='/about' style={{textDecorationLine:'none'}}>
                  About us
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Jumia careers
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Jumia Express
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Terms and Conditions
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Privacy Notice
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Jumia Store Credit Terms & Conditions
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Jumia Payment Information Guidelines
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Cookie Notice
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Jumia Global
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Official Stores
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Flash Sales
                </a>
              </div>
            </div>
            <div className="col-3 pe-5 py-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>NEED HELP?</h4>
              <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Sell on Jumia
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Vendor hub
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Become a Sales Consultant
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Become a Logistics Service Partner
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Join the Jumia DA Academy
                </a>
                <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                  Join the Jumia KOL Program
                </a>
              </div>
            </div>
            <div className="col-3 pe-5 py-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>JUMIA INTERNATIONAL</h4>
              <div className="d-flex">
                <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                  <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                    Algeria
                  </a>
                  <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                    Egypt
                  </a>
                  <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                    Ghana
                  </a>
                  <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                    Ivory Coast
                  </a>
                  <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                    Kenya
                  </a>
                </div>
                <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                  <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                    Morocco
                  </a>
                  <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                    Senegal
                  </a>
                  <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                    Tunisia
                  </a>
                  <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                    Uganda
                  </a>
                  <a className='text-white footer-link 'style={{textDecorationLine:'none'}}>
                    Zando
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-2 footer-border">
            <div className="col-3 pe-5 pb-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>JOIN US ON</h4>
              <div className='social-icons d-flex align-items-center ps-5 py-2 mb-2 '>
                <a href="" className="social-icons text-white fs-4 me-2">
                  <FaFacebookF />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-2">
                  <FaYoutube />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-2">
                  <TiSocialInstagram />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-2">
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div className="col-6 pe-5 pb-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>PAYMENT METHODS & DELIVERY PARTNERS</h4>
              <div className='d-flex align-items-center ps-5 py-2 mb-2 '>
                <a href="" className="social-icons text-white fs-4 me-3">
                  <GiReceiveMoney />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <FaCcMastercard />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <RiVisaLine />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <TbBrandAirbnb />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <FaMaxcdn />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <TbBrandAmongUs />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <TbBrandAngular />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <TbBrandAws />
                </a>
              </div>
            </div>
          </div>
          <div className="row footer-border">
            <div className="col-12">
              <p className="text-center mb-0 text-white p-3 fs-6">
                &copy; {new Date().getFullYear()} Powered Jumia
              </p>
            </div>
          </div>
        </div>
      </footer>
      <footer className='small-screen'style={{borderTop:'1px solid rgba(255, 255, 255, .1)'}}>
      
      </footer>
    </div>
  )
}

export default Footer