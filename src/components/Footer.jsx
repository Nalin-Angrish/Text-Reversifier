import React from "react";
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

const Container = styled.table`
background-color: #000000;
padding:10px 0px 20px 0px;
text-align:center;
width: 100%;
`;
  
class Footer extends React.Component {
  render(){
    return (
      <Container>
        <thead>
          <tr>
            <th>The Developer</th>
            <th>Social</th>
            <th>Text-Reversifier</th>
          </tr>
          <br/>
        </thead>
        <tbody>
          <tr>
            <td><a href="https://www.nalinangrish.me" target="_blank" rel="noreferrer">Website</a></td>
            <td><a href="https://www.instagram.com/nalin_2005" target="_blank" rel="noreferrer">Instagram</a></td>
            <td><a href="https://www.github.com/Nalin-Angrish/Text-Reversifier" target="_blank" rel="noreferrer">Source</a></td>
          </tr>
          <tr>
            <td><a href="https://www.nalinangrish.me/apps" target="_blank" rel="noreferrer">Projects</a></td>
            <td><a href="https://www.github.com/Nalin-Angrish" target="_blank" rel="noreferrer">GitHub</a></td>
            <td><Link onClick={scroll.scrollToTop()} className="clickable" to="top" smooth={true} offset={-70} duration={1000}>The Top</Link></td>
          </tr>
        </tbody>
      </Container>
    );
  }
};
export default Footer;
