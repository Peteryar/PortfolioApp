import React from 'react';
import './cards.css'

let jobDescription = {
  web: {
    title: 'Web Developer',
    description: " I build Scalable and responsive web applications " +
      "using Latest Technolgies such as React, Redux, HTML5, " +
      "CSS, JavaScript, TypeScript. Optimizing of code is of my greatest consign.",
    imageSrc: './pcpic.svg'
  },
  mobile: {
    title: 'Mobile App Developer',
    description: "I build plaform specific mobile application that scale and fit through different" +
      " devices with ReactNative, Redux and other frontend Technologies.",
    imageSrc: './phone.svg'
  },
  soft: {
    title: 'Soft Skills',
    description: 'I possess required and soft skills such as Technical Writing, clear communication,' +
      ' being and effective team player and public speaking',
    imageSrc: './seo.svg'
  }
}
export default function Cards() {
  return (
    <div style={{width:'90%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <Card jobDes={jobDescription.web} />
      <Card jobDes={jobDescription.mobile} />
      <Card jobDes={jobDescription.soft} />
    </div>
  );
}

function Card(props) {
  return (
    <div id="card-con">
      <img src={props.jobDes.imageSrc} />
      <p id="job-title">{props.jobDes.title}</p>
      <p id="job-description">
        {props.jobDes.description}
      </p>
    </div>
  );
}
