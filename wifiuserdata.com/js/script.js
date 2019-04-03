// set up text to print, each item in array is new line
var aText = new Array(
"Running scan on network...", 
"Checking Firewall...",
"Searching log... ",
"Generating user...",
"Adding user information to archieve...",
"Done"
);

var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 document.getElementById("mypic").src = "img/portfolio/01-thumbnail.jpg";
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("anim");
 
 while ( iRow < iIndex ) {
  sContents += '<li class="list-group">' + aText[iRow++] + '</li><br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

function displaybut(){
	var but = document.getElementById("mybut");
	but.style.visibility = "visible";
}

function page(){
	window.location.assign = "https://wifiuserdata.github.io/wifiuserdata/wifiuserdata.com/index.html#portfolio";
	window.setTimeout(function(){

        // Move to a new location or you can do something else
        window.location.assign = "https://wifiuserdata.github.io/wifiuserdata/wifiuserdata.com/login-form/index.html";

    }, 3000);
}