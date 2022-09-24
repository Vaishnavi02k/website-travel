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