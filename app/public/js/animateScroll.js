var AnimateElements =function(){
	var view = window.outerHeight;
	var ElementsAnimate = document.getElementsByClassName('animateElement');
	
		for(var i = 0 ;i < ElementsAnimate.length;i++){
			var E = ElementsAnimate[i].getBoundingClientRect();
			if(E.top < (view-100) && E.top != 0){

					ElementsAnimate[i].className ='active '+ElementsAnimate[i].className;
			}else{
			}
		}
}
AnimateElements();