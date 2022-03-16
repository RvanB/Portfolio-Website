import React from 'react';

import './Home.css';

import Image from 'react-bootstrap/Image';

class Home extends React.Component {

  render() { 
    return (
      <div className="Home">
        <h4>About Me</h4>
        <p>I'm Raiden, a Software Engineer in the San Francisco Bay Area. My primary interests are in computer graphics, computer vision, and machine learning, but I'm constantly picking up new interests. During my undergrad at Western Washington University, I worked on bioinformatics research under <a href="https://facultyweb.cs.wwu.edu/~jagodzf/">Dr. Filip Jagodzinski</a>, and computer vision research under <a href="https://facultyweb.cs.wwu.edu/~wehrwes/">Dr. Scott Wehrwein</a>. Outside of work I enjoy photography, lettering, hiking, music listening, and drinking tea.</p>
        <h4>Resume</h4>
        <iframe title="resume" src="/files/vanBronkhorstR_resume.pdf" width="100%" height="500"/>
      </div>
    );
  }
}

export default Home;
