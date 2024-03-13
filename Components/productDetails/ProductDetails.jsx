import React from 'react'
import Styles from './ProductDetails.module.css'
import { FaStar } from 'react-icons/fa';
import ProductSection from '../ProductSection/ProductSection'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
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

  const data5 = [
    {
      id: 1,
      name: 'XIAOMI Redmi Note 13 6.67" 6GB RAM/128GB ROM Android 12 - Black',
      newPrice: 'EGP 214,000',
      oldPrice: 'EGP 230,500',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/3476082/1.jpg?5801'
    },

    {
      id: 2,
      name: 'itel S23 6.6" 8GB RAM/256GB ROM Android 12 - Sky Blue',
      newPrice: 'EGP 99,990',
      oldPrice: 'EGP 150,000',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/3355072/1.jpg?5389'
    },

    {
      id: 3,
      name: 'UMIDIGI G1 6.52" 2GB RAM/32GB ROM Android 12 - Galaxy Blue',
      newPrice: 'EGP 66,800',
      oldPrice: 'EGP 98,420',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/7833241/1.jpg?3144'
    },

    {
      id: 4,
      name: 'Infinix Hot 30i 6.6 HD+, 4+4GB RAM /128GB ROM Android 12 - Blue',
      newPrice: 'EGP 132,355',
      oldPrice: 'EGP 139,000',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/17/3425342/1.jpg?3784'
    },

    {
      id: 5,
      name: 'itel A70 6.6" HD+, 128GB ROM + 3GB RAM, 5000mAh, 13MP + 8MP, 4G',
      newPrice: 'EGP 97,990',
      oldPrice: 'EGP 100,000',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/1194962/1.jpg?1450'
    },

    {
      id: 6,
      name: 'XIAOMI Redmi Note 13 Pro 6.67" 8GB RAM/256 GB ROM Android 12 -Black + Free Smart Light Sound Speaker',
      newPrice: 'EGP 344,500',
      oldPrice: 'EGP 365,000',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/2086082/1.jpg?9356'
    },

    {
      id: 7,
      name: 'AGM PG001 Dual SIM, Torchlight, Wireless FM,SOS Function-Red',
      newPrice: 'EGP 15,680',
      oldPrice: 'EGP 19,100',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/8379422/1.jpg?0527'
    },

    {
      id: 8,
      name: 'Samsung Galaxy A03 Core 6.5" 2GB RAM/ 32GB ROM Android 11- Onyx Black',
      newPrice: 'EGP 89,940',
      oldPrice: 'EGP 94,740',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/4927521/1.jpg?8740'
    },

    {
      id: 9,
      name: 'itel ICC-81 Car Charger, MP3 Player',
      newPrice: 'EGP 5,290',
      oldPrice: 'EGP 8,000',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/8619381/1.jpg?3983'
    },

    {
      id: 10,
      name: 'Samsung Galaxy A34 5G 6.4" 6GB RAM/128GB ROM Android 13 - Green',
      newPrice: 'EGP 353,300',
      oldPrice: 'EGP 485,000',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/6317722/1.jpg?7922'
    },

    {
      id: 11,
      name: 'AGM PG001 Louder Speaker, FM Radio,SOS, Dual SIM Torch-Black',
      newPrice: 'EGP 15,680',
      oldPrice: 'EGP 19,100',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/2379422/1.jpg?1352'
    },

    {
      id: 12,
      name: 'Samsung Galaxy A25 5G 6.5" 8GB RAM/256GB ROM Android 14 - Light Blue',
      newPrice: 'EGP 347,550',
      oldPrice: 'EGP 390,000',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/6439772/1.jpg?9332'
    },
  ]


  return (
    <div className='container-lg'>
      <div className='d-lg-block d-none' style={{display:'flex'}}>
        <div className={`pt-4${Styles.navtext}`}>
          <p>
            <a href="/" className='me-2 text-reset text-decoration-none'>Home {'> '} </a>
            <a href="/category" className='me-2 text-reset text-decoration-none'>Phones & Tablet {'>'}</a>
            <a href="/category" className='me-2 text-reset text-decoration-none'>Mobile Phones {'>'}</a>
            <a href='/ProducDetails' className='me-2  text-decoration-none baby'>XIAOMI Redmi Note 13 6.67" 6GB RAM/128GB ROM Android 12 - Black</a>
          </p>
        </div>
        <div>
          <div className='row px-2'>
            <section className={`bg-white mt-2 col-9'${Styles.detailssection}`} id='detail' style={{ borderRadius: '5px',display:'flex' }}>
              <div className='row mt-3'>
                <div className='col-4'>
                  <img src='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/3476082/1.jpg?5801' alt="" className='' />
                  <p className='mx-2'>SHARE THIS PRODUCT</p>
                  <div className=' d-flex mx-2'>
                    <div className={`mx-1 border rounded-circle border-1 ${Styles.social1} border-dark d-flex justify-content-center align-items-center`}><TiSocialFacebook /></div>
                    <div className={`mx-1 border rounded-circle border-1 ${Styles.social1} border-dark d-flex justify-content-center align-items-center`}><FaTwitter /></div>
                  </div>
                </div>

                <div className='col-8'>
                  <h3>XIAOMI Redmi Note 13 6.67" 6GB RAM/128GB ROM Android 12 - Black</h3>
                  <h4>brand: </h4>
                  <div className={Styles.straight}></div>
                  <div className='d-flex align-items-end'>
                    <p className='me-1 pFirst'>EGP 214,000</p>
                    <p className='pSecond'>EGP 230,000</p>
                  </div>
                  <p className='pThird'>{Math.floor(Math.random() * 20)} units left</p>
                  <p className='pFourth'>Delivery fees from EGP 35.00 to Minya. Save 10 EGP on shipping with prepaid payment</p>
                  <div className='d-flex align-items-center'>
                    <div className={Styles.star1} style={{display:'flex'}}><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></div>
                    <div className=' mt-1 ms-1' Style={{ fontSize: 14, color: 'blue' }}>({Math.floor(Math.random() * 300)} verified ratings)</div>
                  </div>
                  <div className={`my-2 ${Styles.straight}`}></div>
                  <p>VARIATION AVAILABLE</p>
                  <div className={`py-1 ${Styles.variation}`}>
                    black
                  </div>

                  <div className={`my-2 py-2 ${Styles.toCart} d-flex justify-content-between align-items-center px-2 mx-1`} >
                    <div className={Styles.cartImg}><MdAddShoppingCart /></div>
                    <p>ADD TO CART</p>
                    <div></div>
                  </div>
                  <div className={`my-3 ${Styles.straight}`}></div>

                  <div>
                    <div>PROMOTIONS</div>
                    <div className='d-flex '>
                      <div className={Styles.color1}><MdStars /></div>
                      <p className=' mt-1 ms-2' Style={{ fontSize: 14, color: 'blue' }}>
                        Check All Our Installments Offers from here </p>
                    </div>
                  </div>
                </div>
                <p className={`ms-2${Styles.down}`} Style={{ fontSize: 14, color: 'blue' }}>report incorrect product information</p>

              </div>
            </section>
          </div>
        </div>
        <div className='row px-2'>
          <section className={`bg-white mt-2 col-9'${Styles.detailssection}`} id='detail' style={{ borderRadius: '5px' }}>
            <div className='row mt-3'>
              <div className='mt-3 bg-white w-100'>
                <p style={{ fontWeight: 'bolder', fontSize: 25 }}>Product details</p>
                <div className={`my-3 ${Styles.straight}`}></div>
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
          <section className={`bg-white mt-2 col-9'${Styles.detailssection}`} id='detail' style={{ borderRadius: '5px' }}>
            <div className='row mt-3'>
              <div className='mt-3 bg-white w-100'>
                <p style={{ fontWeight: 'bolder', fontSize: 25 }}>Specifications</p>
                <div className={`my-3 ${Styles.straight}`}></div>
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
          <section className={`bg-white mt-2 col-9'${Styles.detailssection}`} id='detail' style={{ borderRadius: '5px' }}>
            <div className='row mt-3'>
              <div className='mt-3 bg-white w-100'>
                <p style={{ fontWeight: 'bolder', fontSize: 25 }}>Customers who viewed this also viewed</p>
                <ProductSection data={data5} display='d-none' flash='d-none' time='d-none' />
              </div>
            </div>
          </section>


        </div>
        <div className='row px-2'>
          <section className={`bg-white mt-2 col-9'${Styles.detailssection}`} id='detail' style={{ borderRadius: '5px' }}>
            <div className='row mt-3'>
              <FeedbackList />
            </div>
          </section>
        </div>
        <div className='row px-2'>
          <section className={`bg-white mt-2 col-9'${Styles.detailssection}`} id='detail' style={{ borderRadius: '5px' }}>
            <div className='row mt-3'>
              <div className='mt-3 bg-white w-100'>
                <p style={{ fontWeight: 'bolder', fontSize: 25 }}>You may also like</p>
                <ProductSection data={data5} display='d-none' flash='d-none' time='d-none' />
              </div>
            </div>
          </section>
        </div>
       
      </div>


      <div className='d-lg-none'>
        <div className={`mt-2 ${Styles.detailssecond}`}>
          <div className='text-center bg-white'>
            <img src={data5.imageUrl} alt="" className='' />
          </div>
          <div className='bg-white mt-2 p-2'>
            <h3>{data5.name}</h3>
            <h4>brand:</h4>
            <div className='d-flex align-items-center'>
              <p className={`me-2 ${Styles.smallp1}`}>{data5.newPrice}</p>
              <p className={`me-2 ${Styles.smallp2}`}>{data5.oldPrice}</p>
            </div>
            <p className='pThird'>{Math.floor(Math.random() * 20)} units left</p>
            <p className={`pFourth ${Styles.smallp3}`}>Delivery fees from EGP 35.00 to Minya. Save 10 EGP on shipping.</p>
            <div className='d-flex justify-content-between'>
              <div className='d-flex align-items-center'>
                <div><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></div>
                <div className=' mt-1 ms-1 ' Style={{ fontSize: 14, color: 'blue' }}>({Math.floor(Math.random() * 300)} verified ratings)</div>
              </div>
              <div className={`d-flex${Styles.smallIcons}`}>
                <div className='me-2'><IoShareSocial /></div>
                <div><FaRegHeart /></div>
              </div>
            </div>

          </div>
        </div>

        <div className={`mt-2 ps-2${Styles.promo}`}>
          promotions
          <div className='d-flex '>
            <div className={Styles.color1}><MdStars /></div>
            <p className='mt-1 ms-1' Style={{ fontSize: 14, color: 'blue' }}>
              Check All Our Installments Offers from here </p>
          </div>
        </div>

        <div className='bg-white p-2'>

        </div>

        <div className={`mt-2 ps-2${Styles.promo}`}>delivery & returns</div>

        <div className='bg-white p-2'>
          <div className={Styles.expressanother}>
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
          <div className={` d-flex ${Styles.changeColor}`}>
            <div className={`p-2 border me-2 ${Styles.ordering}`}><FaHandsHolding /></div>
            <div>
              <div className='d-flex justify-content-between w-100'>
                <p className={Styles.subb1}>Pickup Station</p>
                <p className={Styles.subb2}>Details</p>
              </div>
              <p className={Styles.subb3}>Delivery Fees EGP 250</p>
              <p className={Styles.subb4}>Arriving at pickup station between 26 February & 27 February when you order within next 5hrs 15mins</p>
            </div>
          </div>
          <div className={` d-flex ${Styles.changeColor}`}>
            <div className={`p-2 border me-2 ${Styles.ordering}`}><CiDeliveryTruck /></div>
            <div>
              <div className='d-flex justify-content-between w-100'>
                <p className={Styles.subb1}>Door Delivery</p>
                <p className={Styles.subb2}>Details</p>
              </div>
              <p className={Styles.subb3}>Delivery EGP 35.00</p>
              <p className={Styles.subb4}>Ready for delivery between 12 March & 14 March when you order within next 3hrs 24mins</p>
            </div>
          </div>
          <div className={` d-flex ${Styles.changeColor}`}>
            <div className={`p-2 border me-2 ${Styles.ordering}`}><GoPackageDependencies /></div>
            <div>
              <div className='d-flex justify-content-between w-100'>
                <p className={Styles.subb1}>Warranty</p>

              </div>
              <p className={Styles.subb3}>1 Year warranty</p>

            </div>
          </div>


        </div>


        <div className='bg-white p-1 mt-2 sticky-bottom d-flex align-items-center'>
          <div className={`p-3 ${Styles.smallBottom}`}><FaPhoneAlt /></div>
          <div className={`my-2 py-2 ${Styles.toCart} d-flex justify-content-between align-items-center px-2 mx-1 w-100`} >
            <div className={Styles.cartImg}><MdAddShoppingCart /></div>
            <p>ADD TO CART</p>
            <div></div>
          </div>
        </div>
      </div>

      <div className='mt-3 bg-white w-100'><ProductSection data={data5} display='d-none' flash='d-none' time='d-none' /></div>
    </div>
  )
}

export default ProductDetails
