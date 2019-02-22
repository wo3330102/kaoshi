var swiper = (function() {
	// 私有变量, 不提供给外部使用
	var obj,
		$bannerBox,
		$tipBox,
		$tipAll,
		$prevBtn,
		$nextBtn,
		imgWidth,
		index = 0;

	return {
		init(ele) {
			// 相当于给一个对象添加了一个属性
			obj = document.querySelector(ele);
			imgWidth = obj.clientWidth;
			console.log(imgWidth);
			// 获取上一页按钮
			$prevBtn = obj.querySelector('.left-btn');
			$nextBtn = obj.querySelector('.right-btn');
			// 获取下一页按钮
			$bannerBox = obj.firstElementChild;
			console.log('$bannerBox');
			console.log($bannerBox)
			$tipBox = $bannerBox.nextElementSibling;
			console.log('$tipBox');
			console.log($tipBox)
			$tipAll = $tipBox.children;
			console.log('$tipAll');
			console.log($tipAll);
			// 给所有小圆点添加index
			// 给所有小圆点添加index
			for(let i = 0; i < $tipAll.length; i++) {
				$tipAll[i].index = i;
			}
			var $firstImg = $bannerBox.firstElementChild;
			var $lastImg = $bannerBox.lastElementChild;
			$bannerBox.appendChild($firstImg.cloneNode(true));
			$bannerBox.insertBefore($lastImg.cloneNode(true), $firstImg);
			$bannerBox.style.left = -imgWidth + 'px';
			console.log($bannerBox.style.left);

			function getStyle(obj, attr) {
				if(window.getComputedStyle) {
					return window.getComputedStyle(obj, null)[attr]
				}
				return obj.currentStyle[attr];
			}
			this.event()
		},
		event() {
			const self = this;
			$tipBox.addEventListener('click', function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName === 'LI') {
					index = target.index;
					self.showImage();
				}
			}, false)
			$prevBtn.onclick = function() {
				index--;
				console.log(111)
				self.showImage()
			}
			$nextBtn.onclick = function() {
				index++;
				self.showImage()
			}
			// console.log(obj);
		},

		showImage() {
			// 展示对应的图片
			// 对应的小圆点
			if(index < 0) {
				$bannerBox.style.left = -($tipAll.length + 1) * imgWidth + 'px';
				console.log($tipAll.length);
				// 展示最后一张
				index = $tipAll.length - 1;
			} else if(index > $tipAll.length - 1) {
				$bannerBox.style.left = ($tipAll.length + 1) * imgWidth + 'px';
				index = 0;
			}
			for(let i = 0; i < $tipAll.length; i++) {
				$tipAll[i].classList.remove('active');
				// $tipAll[i].className.replace('active', '');

			}
			$tipAll[index].classList.add('active');

			function getStyle(obj, attr) {
				if(window.getComputedStyle) {
					return window.getComputedStyle(obj, null)[attr]
				}
				return obj.currentStyle[attr];
			}
			
//			var $bannerBox.style.left = getStyle($bannerBox, 'left');
			$bannerBox.style.left = -(index + 1) * imgWidth;
		}

	}
}())