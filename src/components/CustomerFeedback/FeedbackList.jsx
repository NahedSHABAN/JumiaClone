import React from 'react';
import { FaStar } from "react-icons/fa";
import { ProgressBar } from 'react-bootstrap';
import { FiCheckCircle } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const FeedbackList = () => {
  const now = 60;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',padding:20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <h3>Verified Customer Feedback</h3>
        <button style={{ backgroundColor: 'transparent', border: 'none', color: 'orange', display: 'flex', alignItems: 'center' }}>SEE ALL <IoIosArrowForward style={{ color: 'orange' }} /></button>
      </div>
      <div className='straight my-2'></div>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: '0 0 30%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 }}>
            <p>VERIFIED RATINGS (8)</p>
            <div style={{ backgroundColor: '#f2f2f2', padding: '10px', width: 'calc(100% - 20px)', textAlign: 'center', maxWidth: 200 }}>
              <h2 style={{ color: '#ffd700' }}>4.3/5</h2>
              <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 10 }}>
                <FaStar style={{ fontSize: 20, color: '#ffd700' }} />
                <FaStar style={{ fontSize: 20, color: '#ffd700' }} />
                <FaStar style={{ fontSize: 20, color: '#ffd700' }} />
                <FaStar style={{ fontSize: 20, color: '#ffd700' }} />
              </div>
              <p>8 verified ratings</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'calc(100% - 20px)', maxWidth: 200 }}>
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div className="d-flex justify-content-between align-items-center w-100" key={index}>
                  <p className="m-0">{rating} <FaStar style={{ color: '#ffd700' }} /> (5)</p>
                  <ProgressBar now={now} variant="warning" style={{ width: '60%', margin: '0 10px' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ flex: '1' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 10 }}>
            <p>PRODUCT REVIEWS (1)</p>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 10 }}>
              <FaStar style={{ fontSize: 20, color: '#ffd700' }} />
              <FaStar style={{ fontSize: 20, color: '#ffd700' }} />
              <FaStar style={{ fontSize: 20, color: '#ffd700' }} />
              <FaStar style={{ fontSize: 20, color: '#ffd700' }} />
            </div>
            <p style={{ fontWeight: 'bold' }}>حلوه</p>
            <p style={{ fontSize: '10' }}>الخامه حلوه بس الجلد بتاعها لو اخربشت بيعلم و لون بيغير مكان الخربشه لكن ف المجمل حلوه و مقاسها مناسب تمام ل freebuds 4i</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <p>28-04-2022 by AH</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FiCheckCircle style={{ color: 'green', marginRight: '5px' }} />
                <p style={{ color: 'green', marginBottom: 0 }}>Verified Purchase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackList;
