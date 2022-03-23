import React from 'react';

import About from './About.jsx';
import Code from './Code.jsx';

import $ from 'jquery';

class Home extends React.Component {

  componentDidMount() {

    $('.nav-link').on('click', function(e) {
      e.preventDefault();
      let id = $(this).attr('href');
      let sectionOffset = $(id).offset().top;
      let topbarHeight = $('nav').outerHeight(true);
      window.scrollTo(0, sectionOffset - topbarHeight);
    });
  }

  render() { 
    return (
      <div>

        <span id="about"></span>
        <About/>

        <span id="code"></span>
        <Code />

      </div>
    );
  }
}

export default Home;
