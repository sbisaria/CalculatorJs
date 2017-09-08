var txtElement = document.getElementById('txt');
function onButtonClick(str){
	txtElement.value += str;
}

function onAllClearClick(){
	document.getElementById("myform").reset();
}
function onClearClick(){
	txtElement.value=txtElement.value.substring(0,txtElement.value.length-1);
}

function onEqualClick(){
	var expresion = txtElement.value;
	txtElement.value = eval(expresion);
}