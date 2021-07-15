import React from 'react';
import logo from '../Logo.png';
import '../css/Intro.css';

class Intro extends React.Component { 
  render() {
    return (
      <div className="Intro" id="top">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 id="Introduction">Welcome to Text-Reversifier!</h1>
          <p>
          A cool web-app for fun to flip letters in a text up-to-down for the Australians! 
          This app is made for the Australians because they live in the southern hemisphere, 
          and so would be seeing things upside-down........ <br /><br />
          Just kidding, this app was made just for time pass for people like me who are really bored, 
          and for the memers on the web who want to make memes like these!<br /><br />
          <div className="gallery">
            <img src="https://i.imgur.com/XHZu3xQ.jpg" alt="Meme 1" loading="lazy" />
            <img src="https://i.imgur.com/CGx2x6d.jpg" alt="Meme 2" loading="lazy" />
            <img src="https://i.kym-cdn.com/photos/images/original/001/405/106/36a.jpg" alt="Meme 3" loading="lazy" />
          </div>
          </p>
        </header>
      </div>
    );
  }
}


export default Intro;