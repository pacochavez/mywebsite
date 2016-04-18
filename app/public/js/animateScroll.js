var AnimateElements = function(){
	var view = window.outerHeight;
	var ElementsAnimate = document.getElementsByClassName('animateElement');
			// console.log(view)
	
	for(var i = 0 ;i < ElementsAnimate.length;i++){
		var E = ElementsAnimate[i].getBoundingClientRect();
		var S = ElementsAnimate[i].className.split(" ");
		if(S[0]!="active"){
			if(E.top < (view-100) && E.top != 0){
				console.log(E.top)
					ElementsAnimate[i].className ='active '+ElementsAnimate[i].className;
			}
		}
	}
}

