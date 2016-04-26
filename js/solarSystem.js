;/*!/static/js/solarSystem.js*/
$(function() {
	var solar = (function() {
		var radius = 0,
			addX = 0,
			mouseX = mouseY = mouseZ = 0,
			container = $('#contentContainer'),
			carousel = $('#carouselContainer');


		// 获取鼠标 X、Y、Z
		function onMouseMove(event) {
			mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0025;
			mouseY = -(-(window.innerHeight * .5) + event.pageY) * .01;
			mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY) - 200);
		}

		// 容器变换
		function looper() {
			// var randomY = getRandomNum(20)

			addX += mouseX;

			TweenMax.to(carousel, 1, {
				rotationY: addX,
				rotationX: mouseY,
				ease: Quint.easeOut
			})
			TweenMax.set(carousel, {
				z: mouseZ
			});
		}

		// 获取 n 位以内的随机数
		function getRandomNum(n) {
			return Math.random() * n;
		}

		// 填充星星
		function starSet(num) {
			var height = container.height(),
				width = container.width(),
				i = 0,
				divArr = [];

			var divCss = {
				'position': 'absolute',
				'width': '2px',
				'height': '2px',
				'border-radius': '2px',
				'background-color': 'rgba(255, 255, 255, 0.8)',
				'box-shadow': '0 0 10px #eee'
			}

			for (; i < num; i++) {
				var
					newElem = document.createElement('div'),
					cssTop = getRandomNum(height),
					cssLeft = getRandomNum(width),
					randomScale = getRandomNum(1.5),
					divCss = {
						'position': 'absolute',
						'width': '2px',
						'height': '2px',
						'border-radius': '2px',
						'background-color': 'rgba(255, 255, 255, 0.8)',
						'box-shadow': '0 0 10px #eee',
						'top': cssTop,
						'left': cssLeft,
						'transform': 'scale(' + randomScale + ')',
						'-webkit-transform': 'scale(' + randomScale + ')',
						'-moz-transform': 'scale(' + randomScale + ')'
					};

				$(newElem).css(divCss);
				divArr.push(newElem);
			}

			container.append(divArr);
		}

		// 舞台缓动
		function stageMove() {
			var stageWidth = carousel.width(),
				itemLength = $('.example').length;

			radius = Math.round( (250) / Math.tan( Math.PI / itemLength ) );

			window.addEventListener("mousemove", onMouseMove, false);
			// window.ticker = setInterval( looper, 1000/60 );
		}
		return {
			init: function() {
				// 渲染星星
				starSet(100);
				// 舞台缓动
				stageMove();
			}
		}
	})();

	solar.init();
})
