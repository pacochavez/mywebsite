function AnimateElements(){
	var view = window.outerHeight;
	var ElementsAnimate = document.getElementsByClassName('animateElement');
	for(var i = 0 ;i < ElementsAnimate.length;i++){
		var E = ElementsAnimate[i].getBoundingClientRect();
		if(E.top < view){
			ElementsAnimate[i].className ='animateElement active'
		}
	}
}