/* function for hamburger icon */
function myFunction() {
  		var x = document.getElementById("myTopnav");
  		if (x.className === "topnav-right") {
  			x.className += " responsive";
  		} else {
  			x.className = "topnav-right";
  		}
  	}