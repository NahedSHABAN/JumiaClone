import React from 'react'
import phones from '../../apiData/phones&gadget'
import './ProductDetails.css'
import ProductSection from '../ProductSection/ProductSection'
import imageFive from '../../apiData/imageFive'
import imageTwo from '../../apiData/imageTwo'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { FaStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { useState, useEffect } from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { FaHandsHolding } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { GoPackageDependencies } from "react-icons/go";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Table } from 'react-bootstrap';
import FeedbackList from '../CustomerFeedback/FeedbackList';


const ProductDetails = () => {
  const [display, setDisplay] = useState('d-none')
  const { addItem, } = useCart()
  let { id } = useParams();
  const product = phones.find(phones => String(phones.id) === id);



  const addedItems = () => {
    addItem(product)

    setTimeout(() => {
      setDisplay('d-block')
    }, 2000)

    setTimeout(() => {
      setDisplay('d-none')
    }, 4000)
  }


  return (
    <div className='container-lg'>
      <div className={`fixed-top text-center py-2 addProduct ${display}`}><p>Product added successfully</p></div>
      <div className='d-lg-block d-none'>
        <div className='pt-4 nav-text'>
          <p>
            <a href="/" className='me-2 text-reset text-decoration-none'>Home {'> '} </a>
            <a href="/category" className='me-2 text-reset text-decoration-none'>Phones & Tablet {'>'}</a>
            <a href="/category" className='me-2 text-reset text-decoration-none'>Mobile Phones {'>'}</a>
            <a href={`/productDetail/${product.id}`} className='me-2  text-decoration-none baby'>{product.name}</a>
          </p>
        </div>
        <div>
          <div className='row px-2'>
            <section key={id} className="details-section bg-white mt-2 col-9" id='detail' style={{ borderRadius: '5px' }}>
              <div className='row mt-3'>
                <div className='col-4'>
                  <img src={product.imageUrl} alt="" className='' />
                  <p className='mx-2'>SHARE THIS PRODUCT</p>
                  <div className=' d-flex mx-2'>
                    <div className='mx-1 border rounded-circle border-1 social-1 border-dark d-flex justify-content-center align-items-center'><TiSocialFacebook /></div>
                    <div className='mx-1 border rounded-circle border-1 social-1 border-dark d-flex justify-content-center align-items-center'><FaTwitter /></div>
                  </div>
                </div>

                <div className='col-8'>
                  <h3>{product.name}</h3>
                  <h4>brand: </h4>
                  <div className='straight'></div>
                  <div className='d-flex align-items-end'>
                    <p className='me-1 pFirst'>{product.new}</p>
                    <p className='pSecond'>{product.old}</p>
                  </div>
                  <p className='pThird'>{Math.floor(Math.random() * 20)} units left</p>
                  <p className='pFourth'>Delivery fees from EGP 35.00 to Minya. Save 10 EGP on shipping with prepaid payment</p>
                  <div className='d-flex align-items-center'>
                    <div className='star-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></div>
                    <div className='random mt-1 ms-1'>({Math.floor(Math.random() * 300)} verified ratings)</div>
                  </div>
                  <div className='straight my-2'></div>
                  <p>VARIATION AVAILABLE</p>
                  <div className='variation py-1'>
                    black
                  </div>

                  <div className='my-2 py-2 toCart d-flex justify-content-between align-items-center px-2 mx-1' onClick={(addedItems)}>
                    <div className='cartImg'><MdAddShoppingCart /></div>
                    <p>ADD TO CART</p>
                    <div></div>
                  </div>
                  <div className='straight my-3'></div>

                  <div>
                    <div>PROMOTIONS</div>
                    <div className='d-flex '>
                      <div className='color-1'><MdStars /></div>
                      <p className='ms-2 random mt-1'>
                        Check All Our Installments Offers from here </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className='random down ms-2'>report incorrect product information</p>
            </section>
            
            <section className='col-3 '>
              <div className='bg-white px-2 mt-2 detail-section-2 pt-2'>
                <div className='dt-sub-1'>
                  <p>DELIVERY RETURNS</p>
                </div>
                <div className='straight my-2'></div>
                <div className='express-another'>
                  <img src="https://vendorhub.jumia.co.ke/wp-content/uploads/2017/08/Jumia-Express-logo-e1556633520715.png" alt="" />
                  <p>Free delivery on thousands of products</p>
                </div>
                <div className='straight my-2'></div>
                <select class="form-select my-3" aria-label="Default select example">
                  <option selected>Al Minya</option>
                  <option value="1">Cairo</option>
                  <option value="2">Giza</option>
                  <option value="3">Alexandria</option>
                </select>
                <select class="form-select my-2" aria-label="Default select example">
                  <option selected>Minya</option>
                  <option value="1">Magaha</option>
                  <option value="2">Malawi</option>
                  <option value="3">Samalot</option>
                </select>
                <div>
                  <div className='d-flex '>
                    <div className='p-2 border me-2 ordering'><FaHandsHolding /></div>
                    <div>
                      <div className='d-flex justify-content-between w-100'>
                        <p className='subb-1'>Pickup Station</p>
                        <p className='subb-2'>Details</p>
                      </div>
                      <p className='subb-3'>Delivery Fees EGP 250</p>
                      <p className='subb-4'>Arriving at pickup station between 26 February & 27 February when you order within next 5hrs 15mins</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='d-flex '>
                    <div className='p-2 border me-2 ordering'><CiDeliveryTruck /></div>
                    <div>
                      <div className='d-flex justify-content-between w-100'>
                        <p className='subb-1'>Door Delivery</p>
                        <p className='subb-2'>Details</p>
                      </div>
                      <p className='subb-3'>Delivery EGP 35.00</p>
                      <p className='subb-4'>Ready for delivery between 12 March & 14 March when you order within next 3hrs 24mins</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='d-flex '>
                    <div className='p-2 border me-2 ordering'><GoPackageDependencies /></div>
                    <div>
                      <div className='d-flex justify-content-between w-100'>
                        <p className='subb-1'>Return Policy</p>

                      </div>

                      <p className='subb-4'>Free return within the legal return period from 14 to 30 days, and if they meet the terms & conditions, with the need to report any apparent defect within 48 hours. For more details about return policy.Details</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='d-flex '>
                    <div>
                      <div className='d-flex justify-content-between '>
                        <p className='subb-1' style={{ fontWeight: 'bolder' }}>SELLER INFORMATION</p>
                        <div className=' ordering'><IoIosArrowForward /></div>
                      </div>
                      <div className='straight my-2'></div>

                      <p className='subb-4'>One Year Warranty For smartphones, we offer 12 months repair warranty counted from the date of purchase.Warranties on all replacements follow the same warranty timeframe of the original defective item, or 3 months after being replaced, whichever is longer.DO Apply to The Following1. For quality-related warranty claims (non-human damage),  buyers can return items for repairs. Buyers pay the shipping fees for sending the item back, while we pay for the shipping fees for sending the repaired item back to the buyer.2. For damage from misuse(including, but not limited to: falls, extreme temperatures, water, operating devices improperly), we can offer free repair, but replacement for damaged parts will be charged based on the condition.</p>
                    </div>
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
        <div className='row px-2'>
            <section key={id} className="details-section bg-white mt-2 col-9" id='detail' style={{ borderRadius: '5px' }}>
              <div className='row mt-3'>
              <div className='mt-3 bg-white w-100'>
                <p style={{ fontWeight: 'bolder', fontSize: 25 }}>Product details</p>
                <div className='straight my-3'></div>
                <ul>
                  <li>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate excepturi aspernatur modi sapiente quasi ullam alias blanditiis, soluta placeat omnis fuga deserunt quisquam commodi distinctio et quas in architecto dignissimos.</p>

                  </li>
                </ul>
              </div>
              </div>
            </section>
            
           
          </div>
          <div className='row px-2'>
            <section key={id} className="details-section bg-white mt-2 col-9" id='detail' style={{ borderRadius: '5px' }}>
              <div className='row mt-3'>
              <div className='mt-3 bg-white w-100'>
                <p style={{ fontWeight: 'bolder', fontSize: 25 }}>Specifications</p>
                <div className='straight my-3'></div>
                <div className='mt-3 bg-white w-100 flex' style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', paddingTop: 30 }}>
                <Table bordered style={{ width: 'calc(50% - 5px)' }}>
                  <thead>
                    <tr>
                      <th>KEY FEATURES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          <li>
                            6.6 inches + PLS LCD - Display
                          </li>
                          <li>
                            64GB Storage, 4 GB RAM
                          </li>
                          <li>
                            50 + 5+ 2 MP Back Camera, 13 MP Front Camera
                          </li>
                          <li>
                            Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Table bordered style={{ width: 'calc(50% - 5px)' }}>
                  <thead>
                    <tr>
                      <th>SPECIFICATIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          <li>
                            SKU: SA024MP1IC742NAFAMZ
                          </li>
                          <li>
                            Model: SM-A145F
                          </li>
                          <li>
                            Size (L x W x H cm): 167.7 x 78 x 9.1 mm
                          </li>
                          <li>
                            Color: Black
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              </div>
              </div>
            </section>
            
           
          </div>
          <div className='row px-2'>
            <section key={id} className="details-section bg-white mt-2 col-9" id='detail' style={{ borderRadius: '5px' }}>
              <div className='row mt-3'>
              <div className='mt-3 bg-white w-100'>
                <p style={{ fontWeight: 'bolder', fontSize: 25 }}>Customers who viewed this also viewed</p>
                <ProductSection data={imageFive} display='d-none' flash='d-none' time='d-none' />
              </div>
              </div>
            </section>
            
           
          </div>
          <div className='row px-2'>
            <section key={id} className="details-section bg-white mt-2 col-9" id='detail' style={{ borderRadius: '5px' }}>
              <div className='row mt-3'>
              <FeedbackList/>
              </div>
            </section>
          </div>
          <div className='row px-2'>
            <section key={id} className="details-section bg-white mt-2 col-9" id='detail' style={{ borderRadius: '5px' }}>
              <div className='row mt-3'>
              <div className='mt-3 bg-white w-100'>
                <p style={{ fontWeight: 'bolder', fontSize: 25 }}>You may also like</p>
                <ProductSection data={imageFive} display='d-none' flash='d-none' time='d-none' />
              </div>
              </div>
            </section>
            
           
          </div>
      </div>


      <div className='d-lg-none'>
        <div className=' details-second mt-2'>
          <div className='text-center bg-white'>
            <img src={product.imageUrl} alt="" className='' />
          </div>
          <div className='bg-white mt-2 p-2'>
            <h3>{product.name}</h3>
            <h4>brand:</h4>
            <div className='d-flex align-items-center'>
              <p className='me-2 smallp-1'>{product.new}</p>
              <p className='smallp-2'>{product.old}</p>
            </div>
            <p className='pThird'>{Math.floor(Math.random() * 20)} units left</p>
            <p className='pFourth smallp-3'>Delivery fees from EGP 35.00 to Minya. Save 10 EGP on shipping.</p>
            <div className='d-flex justify-content-between'>
              <div className='d-flex align-items-center'>
                <div className='star-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></div>
                <div className='random mt-1 ms-1'>({Math.floor(Math.random() * 300)} verified ratings)</div>
              </div>
              <div className='smallIcons d-flex'>
                <div className='me-2'><IoShareSocial /></div>
                <div><FaRegHeart /></div>
              </div>
            </div>

          </div>
        </div>

        <div className='promo mt-2 ps-2'>
          promotions
          <div className='d-flex '>
                      <div className='color-1'><MdStars /></div>
                      <p className='ms-2 random mt-1'>
                        Check All Our Installments Offers from here </p>
             </div>
        </div>

        <div className='bg-white p-2'>
          
        </div>

        <div className='promo mt-2 ps-2'>delivery & returns</div>

        <div className='bg-white p-2'>
          <div className='express-another'>
            <img src="https://vendorhub.jumia.co.ke/wp-content/uploads/2017/08/Jumia-Express-logo-e1556633520715.png" alt="" />
            <p>Free delivery on thousands of products</p>
          </div>
          <p>Choose your location</p>
          <select class="form-select my-3" aria-label="Default select example">
            <option selected>Al Minya</option>
            <option value="1">Cairo</option>
            <option value="2">Giza</option>
            <option value="3">Alexandria</option>
          </select>
          <select class="form-select my-2" aria-label="Default select example">
            <option selected>Minya</option>
            <option value="1">Magaha</option>
            <option value="2">Malawi</option>
            <option value="3">Samalot</option>
          </select>
          <div className='d-flex changeColor'>
            <div className='p-2 border me-2 ordering'><FaHandsHolding /></div>
            <div>
              <div className='d-flex justify-content-between w-100'>
                <p className='subb-1'>Pickup Station</p>
                <p className='subb-2'>Details</p>
              </div>
              <p className='subb-3'>Delivery Fees EGP 250</p>
              <p className='subb-4'>Arriving at pickup station between 26 February & 27 February when you order within next 5hrs 15mins</p>
            </div>
          </div>
          <div className='d-flex changeColor'>
            <div className='p-2 border me-2 ordering'><CiDeliveryTruck /></div>
            <div>
              <div className='d-flex justify-content-between w-100'>
                <p className='subb-1'>Door Delivery</p>
                <p className='subb-2'>Details</p>
              </div>
              <p className='subb-3'>Delivery EGP 35.00</p>
                      <p className='subb-4'>Ready for delivery between 12 March & 14 March when you order within next 3hrs 24mins</p>
            </div>
          </div>
          <div className='d-flex changeColor'>
            <div className='p-2 border me-2 ordering'><GoPackageDependencies /></div>
            <div>
              <div className='d-flex justify-content-between w-100'>
                <p className='subb-1'>Warranty</p>

              </div>
              <p className='subb-3'>1 Year warranty</p>

            </div>
          </div>


        </div>


        <div className='bg-white p-1 mt-2 sticky-bottom d-flex align-items-center'>
          <div className='smallBottom p-3'><FaPhoneAlt /></div>
          <div className='my-2 py-2 toCart d-flex justify-content-between align-items-center px-2 mx-1 w-100' onClick={(addedItems)}>
            <div className='cartImg'><MdAddShoppingCart /></div>
            <p>ADD TO CART</p>
            <div></div>
          </div>
        </div>
      </div>

      <div className='mt-3 bg-white w-100'><ProductSection data={imageFive} display='d-none' flash='d-none' time='d-none' /></div>
    </div>
  )
}

export default ProductDetails
