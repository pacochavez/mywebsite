var AnimateElements =function(){
	var view = window.outerHeight;
	var ElementsAnimate = document.getElementsByClassName('animateElement');
	
		for(var i = 0 ;i < ElementsAnimate.length;i++){
			var E = ElementsAnimate[i].getBoundingClientRect();
			console.log(i,view,E.top);
			console.log(i,view,E);
			if(E.top < (view-100) && E.top != 0){

					ElementsAnimate[i].className ='active '+ElementsAnimate[i].className;
			}else{
				console.log("oculto");

			}
		}
}
AnimateElements();