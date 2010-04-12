//This script checks a browser's IE-ness (IE or not IE) and platform (32-bit or 64-bit IE).
//It prints a "Supported" message only if browser is 32-bit IE

var ua = navigator.userAgent.toLowerCase();
var platform = navigator.platform.toLowerCase();

function browserCheck() {

if (ua.indexOf("msie")!=-1)  { //browser is IE
	if (platform == 'win32') { //browser is IE 32-bit
		document.write("<h1>Browser supported!</h1>"); 
	} else if (platform == 'win64') { //browser is IE 64-bit
		document.write("<h1>Browser platform (64-bit) not supported.</h1>");
	} else { //IE undetermined
		document.write("<h1>IE unknown</h1>");
	}
} else { //browser is NOT IE
	document.write("<h1>Browser not supported.</h1>");
}	}

