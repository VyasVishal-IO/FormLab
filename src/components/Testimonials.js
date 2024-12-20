// Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonial-item">
        <p className="testimonial-text">"This product has changed my life! Highly recommend."</p>
        <p className="testimonial-author">- John Doe</p>
      </div>
      <div className="testimonial-item">
        <p className="testimonial-text">"Excellent customer service and amazing features. A+!"</p>
        <p className="testimonial-author">- Jane Smith</p>
      </div>
      <div className="testimonial-item">
        <p className="testimonial-text">"I am so happy with my purchase, would definitely buy again."</p>
        <p className="testimonial-author">- Sarah Lee</p>
      </div>
    </div>
  );
};

export default Testimonials;
