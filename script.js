function firstChar(text) {
  // your code here

	
	if(text.trim() === ""){
		return "";
	}else{
	let str=text.trim();
	return str[0];
	}
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
