import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to our Library Project! Our mission is to create a dynamic community space that fosters a love for reading and lifelong learning. We aim to provide accessible resources and a welcoming environment where people of all ages and backgrounds can explore knowledge, share ideas, and connect with one another. Our library will feature an extensive collection of books, digital resources, and educational materials, ensuring that everyone has the opportunity to learn and grow.</p>
            <p className='fs-17'>We are committed to supporting the educational and cultural needs of our community through various programs, workshops, and events. By offering a wide range of activities, from author talks and reading groups to educational workshops and cultural celebrations, we strive to enrich the lives of our patrons. Our library will also provide dedicated spaces for children, quiet study areas, and access to technology, making it a hub for inspiration, creativity, and personal development.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
