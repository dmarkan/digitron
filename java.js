 function sabiranje() {
	var x = parseInt(document.getElementById("prvi_broj").value);
    var y = parseInt(document.getElementById("drugi_broj").value);
    var z = x + y;
	
	document.getElementById("zbir").value = z; 
						
}
			
function oduzimanje() {
	var x = parseInt(document.getElementById("prvi_broj").value);
    var y = parseInt(document.getElementById("drugi_broj").value);
	var r = x - y;
			
	document.getElementById("razlika").value = r;
			
}

function mnozenje() {
	var x = parseInt(document.getElementById("prvi_broj").value);
    var y = parseInt(document.getElementById("drugi_broj").value);
	var p = x * y;
			
	document.getElementById("proizvod").value = p;
			
}

function deljenje() {
	var x = parseInt(document.getElementById("prvi_broj").value);
    var y = parseInt(document.getElementById("drugi_broj").value);
	var k = x / y;
			
	document.getElementById("kolicnik").value = k;
			
}






	
