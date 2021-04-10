import React from 'react';
import "./css/Navbar.css"
import github from "./icons/github.svg"
import instagram from "./icons/instagram.svg"
import website from "./icons/website.svg"


class Navbar extends React.Component {
	render() {
	  return (
		  <div className="navbar">
			  <h2>Text Reversifier
			  <span className="right">
				  <a href="https://github.com/Nalin-2005/Text-Reversifier" target="_blank" rel="noreferrer" title="Get the Project on GitHub">
				  	<img src={github} alt="Github"/>
				  </a>&nbsp;&nbsp;
				  <a href="https://instagram.com/nalin_2005" target="_blank" rel="noreferrer" title="Nalin Angrish's Instagram">
				  	<img src={instagram} alt="Instagram"/>
				  </a>&nbsp;&nbsp;
				  <a href="https://www.nalinangrish.me" target="_blank" rel="noreferrer" title="Nalin Angrish's Website">
				  	<img src={website} alt="Nalin Angrish"/>
				  </a>
			  </span></h2>
		  </div>
	  );
	}
  }

export default Navbar;