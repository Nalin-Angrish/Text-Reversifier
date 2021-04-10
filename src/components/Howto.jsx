import React from 'react';
import '../css/Howto.css';

class Howto extends React.Component { 
  render() {
    return (
      <div className="Howto">
        <h1>How to Use?</h1>
        <ol>
          <li>Scroll down a bit and you will find a text box where you can type anything you want.</li><br />
          <li>Just below the textbox, there is a bunch of tools which helps you customize how you want your text to appear. You can tweak them to find a suitable text for your meme or a message.</li><br />
          <li>As you change the text and/or the settings, the result will be updated live inside a textbox below the tools.</li><br />
          <li>Done! Now you can copy the text you generated and paste it into your messaging app or inside a meme generator and you can happily share it wherever you want!</li><br />
          <li>Just one last step remaining..... It's an important one.... Be careful while completing it.... Share this tool! If you have used this tool, then might have liked it and so, why not tell your friends how you sent that Australian message! This would encourage me to develop more such cool tools for you and your friends would also benefit from it!</li><br />
        </ol>
      </div>
    );
  }
}


export default Howto;