import React from 'react';
import '../css/Main.css';



function update(){
	var data = {
		"orig":"abcdefghijklmnopqrstuvwxyz1234567890!&",
		"hor":"&!0୧8٢მटμƸςƖzγxwvυɈƨɿpqonmlʞįiʜϱʇǝbɔdɒ",
		"ver":"ɑpcqԍɻმμᴉๅĸɼwuobdʁƨϝnʌʍxλzƖ53ત૨ϱ˩8მ0¡⅋",
		"horver":"⅋¡068L9૬hƐՇƖzʎxʍʌnʇsɹbdouɯๅʞſᴉɥɓɟǝpɔqɐ"
	}
	var inp = document.getElementById("text-input");
	var out = document.getElementById("text-output");
	var horFlip = document.getElementById("horizontal-flip");
	var verFlip = document.getElementById("vertical-flip");
	var font = document.getElementById("font-style");
}

class Main extends React.Component { 
  render() {
    return (
      <div className="Main">
		<h1 id="The-Tool">The Tool </h1>

		<h3>Input:</h3>
        <textarea name="text-input" id="text-input" className="content" onChange={update}>
			Type something here!
		</textarea>

		<h3>Options:</h3>
		<div className="content">
			<fieldset>
				<div id="flip-controls">
					<input type="checkbox" id="vertical-flip" onChange={update}/><label htmlFor="vertical-flip"> Vertical Flip </label><br />
					<input type="checkbox" id="horizontal-flip" onChange={update}/><label htmlFor="horizontal-flip"> Horizontal Flip </label><br />
				</div>
				<div id="font-controls">
					<label htmlFor="font-style"> Choose Font Style: </label><br /><br />
					<select name="font-style" id="font-style" onChange={update}>
						<option value="Times%20new%20Roman">Times new Roman</option>
						<option value="Cascadia%20Code">Cascadia Code</option>
					</select><br />
				</div>
			</fieldset>
		</div>

		<h3>Output:</h3>
        <textarea name="text-output" id="text-output" className="content" disabled>
		Type something here!
		</textarea>
		<script>{update()}</script>
      </div>
    );
  }
}


export default Main;