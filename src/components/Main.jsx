import React from 'react';
import '../css/Main.css';


function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function update(){
	var data = {
		"orig":"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!& ",
		"flipped":"ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄ZƖᄅƐㄣϛ9ㄥ860¡⅋ "
	}
	var inp = document.getElementById("text-input");
	var out = document.getElementById("text-output");
	var horFlip = document.getElementById("horizontal-flip");
	var verFlip = document.getElementById("vertical-flip");

	let outstyle = "orig";
	if(verFlip.checked){
		outstyle = "flipped";
	}
	
	let content = inp.value;
	let output = "";
	for(let i=0;i<content.length;i++){
		let index = data["orig"].indexOf(content[i]);
		if(index>-1){
			output += data[outstyle][index];
		}else{
			output += content[i]
		}
	}
	if(horFlip.checked){
		output = reverseString(output)
	}
	out.value = output;
}


function initialize(){
	// Fetch all fonts data...
	window.fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC6hXU9H8RuiVfowcDkYhTpf87sIruvrlc")
	.then(response => response.json())
	.then(data => {
		var font_styles = document.getElementById("font-style");
		var source_code_pro_index;
		for(let i=0;i<data["items"].length;i++){
			var font = data["items"][i];
			var elem = document.createElement("option");
			elem.innerText = font["family"];
			elem.value = font["files"]["regular"];
			font_styles.append(elem);
			if(font["family"]==="Source Code Pro"){
				source_code_pro_index = i;
			}
		}
		font_styles.getElementsByTagName('option')[source_code_pro_index].selected = 'selected'
		updateFont()
	})
}

function updateFont(){
	var fontUrl = document.getElementById("font-style").value
	if(fontUrl.includes("http://")){
		fontUrl = fontUrl.replace("http://", "https://")
	}
	var fontName = document.getElementById("font-style").options[document.getElementById("font-style").selectedIndex].text
	var font = new FontFace(fontName, 'url('+fontUrl+')');
	font.load().then(function(loaded_face) {
		document.fonts.add(loaded_face);
		document.getElementById("text-output").style.fontFamily = fontName
	})
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
					<label htmlFor="font-style"> Choose Font Style: </label><br />
					<sub>Powered by <a target="_blank" href="https://fonts.google.com" rel="noreferrer">Google Fonts</a></sub>
					<br /><br />
					<select name="font-style" id="font-style" onChange={updateFont}>
					</select><br />
				</div>
			</fieldset>
		</div>

		<h3>Output:</h3>
        <textarea name="text-output" id="text-output" className="content" disabled>
		Type something here!
		</textarea>
		<script>
			{initialize()}
		</script>
      </div>
    );
  }
}



export default Main;