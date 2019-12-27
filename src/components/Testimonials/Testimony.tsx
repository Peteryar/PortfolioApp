import React from 'react';
import './testimony.css'
export default function Testimonials() {
  return (
    <div id="testimonials-con">
      <p id="title">Testimonials</p>
      <Testimony />
    </div>
  );
}

function Testimony() {
  return (
    <div id="testimony-con">
      <img src="./anthony.svg" />
      <p id="testimony">I've worked with Agent Peter for quite
        some years now and each project I gave to him
        turned out to be professional, creative and brilliant
         I would gladly recommend Peter to anyone who would need his</p>
      <p id="client">Anthony Buchi | Founder @Cre8ive Village</p>
      <div id="bullets-con">
        <p className="bullet"></p>
        <p className="bullet"></p>
        <p className="active-bullet"></p>
        <p className="bullet"></p>
      </div>
    </div>
  )
}