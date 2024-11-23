// HomePage.jsx
import React from 'react';
import gymImage from './assets/images.jpeg';  // Import your image here

const HomePage = () => {
  return (
    <div className="container">
      <h2>Welcome to Our Gym</h2>
      <p>Your ultimate fitness destination for a healthier and stronger you.</p>

      {/* Gym Image */}
      <img 
        src={gymImage} 
        alt="State-of-the-art Gym Facilities" 
        className="home-image" 
      />

      <p>
        Our gym offers a wide variety of equipment, certified personal trainers, and a motivating environment
        to help you achieve your fitness goals. Whether you're a beginner or a seasoned athlete, we have everything
        you need to train, improve, and excel.
      </p>

      <p>
        From cardio to strength training, yoga, and group fitness classes, our facility is designed to cater to
        all your fitness needs. Join us today and experience the difference!
      </p>

      <button className="button">Join Us</button>
    </div>
  );
};

export default HomePage;
