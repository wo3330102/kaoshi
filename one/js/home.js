var shop = (function(){
	return {
		init(){
			this.event();
		},
		event(){
			var $left = document.querySelector('.main-left');
			var $right = document.querySelector('.main-right');
			var $showbox = document.querySelector('.neirong');
			$left.onclick = function(e){
				e = e || window.event;
				
			}
			$right.onclick = function(e){
				e = e || window.event;
				console.log(222)
			}
		},
	}
}());
shop.init();