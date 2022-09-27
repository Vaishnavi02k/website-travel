var left=1;
		var right=4;
		function show(){
			for(i=left;i<=right;i++){
				document.getElementById("c"+i).style.display="inline-block";
			}
			if(left===1){
				document.getElementsByClassName("left-button")[0].disabled = true;
			}
			if(left>1){
				document.getElementsByClassName("left-button")[0].disabled = false;
			}
		}

		function moveleft(){

			if (left<=4 && right<=8){
				document.getElementById("c"+left).style.display="none";
			left+=1;
			right+=1;
			for(i=left;i<=right;i++){
				document.getElementById("c"+i).style.display="inline-block";
			}
			}
			else
				return;
			if(left===1){
				document.getElementsByClassName("left-button")[0].disabled = true;
			}
			if(left>1){
				document.getElementsByClassName("left-button")[0].disabled = false;
			}
			if(right===8){
				document.getElementsByClassName("right-button")[0].disabled = true;
			}
			if(right<8){
				document.getElementsByClassName("right-button")[0].disabled = false;
			}

		}

		function moveright(){
			if (left>=1 && right>=5){
				document.getElementById("c"+right).style.display="none";
			left-=1;
			right-=1;

			for(i=left;i<=right;i++){
				document.getElementById("c"+i).style.display="inline-block";
			}

			}
			else
				return;

			if(right===8){
				document.getElementsByClassName("right-button")[0].disabled = true;
			}
			if(right<8){
				document.getElementsByClassName("right-button")[0].disabled = false;
			}
			if(left===1){
				document.getElementsByClassName("left-button")[0].disabled = true;
			}
			if(left>1){
				document.getElementsByClassName("left-button")[0].disabled = false;
			}
		}


		
for(var i =0; i<document.getElementsByClassName("nav-link").length; i++){
	document.getElementsByClassName("nav-link")[i].addEventListener("click",function() {
		handleNavbar();
		this.classList.add("active");
	});
}

function handleNavbar() {
	var navItems = document.getElementsByClassName("nav-link");
	for(var i = 0; i<navItems.length; i++){
		navItems[i].classList.remove("active");
	}
}

function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
      do {
        currenttop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [currenttop - 80];
    }
  }

function scrolldiv(id_ele) {
    window.scroll(0, findPosition(document.getElementById(id_ele)));
  }

  for(var i =0; i<document.getElementsByClassName("nav-link").length; i++){
	document.getElementsByClassName("nav-link")[i].addEventListener("click",function() {
		handleNavbar();
		this.classList.add("active");
	});
}

function handleNavbar() {
	var navItems = document.getElementsByClassName("nav-link");
	for(var i = 0; i<navItems.length; i++){
		navItems[i].classList.remove("active");
	}
}

function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
      do {
        currenttop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [currenttop - 80];
    }
  }

function scrolldiv(id_ele) {
    window.scroll(0, findPosition(document.getElementById(id_ele)));
  }