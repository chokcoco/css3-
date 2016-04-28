;/*!/static/js/solarSystem.js*/
$(function() {
	var solar = (function() {
		var radius = 0,
			addX = 0,
			mouseX = mouseY = mouseZ = 0,
			container = $('#contentContainer'),
			carousel = $('#carouselContainer');


		// 获取鼠标坐标
		// 设置跟随动画变换
		function onMouseMove(event) {
			// console.log('event.pageX '+event.pageX);
			// console.log('event.pageY '+event.pageY);
			// console.log('window.innerWidth '+window.innerWidth);
			// console.log('window.innerHeight '+window.innerHeight);
			// console.log('mouseX '+mouseX);
			// console.log('mouseY '+mouseY);
			// console.log('mouseZ '+mouseZ);
			mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0010;
			mouseY = -(-(window.innerHeight * .5) + event.pageY) * .05;
			mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY)-100);
			// mouseZ = - (Math.abs(mouseY) * 300 - 200);
		}

		// 容器变换
		function looper() {
			// var randomY = getRandomNum(20)

			addX += mouseX;

			// TweenMax.to(target,duration,variables)
			// 让物体的属性从你声明这个方法时的状态变到任何你设定的效果
			// target:Object ：你想要实现动画的目标物体
			// duration:Number ：整个过程的时间
			// variables:Object ：一个包括最终的所有你想得到的属性
			TweenMax.to(carousel, 1, {
				rotationY: addX,
				rotationX: mouseY,
				ease: Quint.easeOut
			});

			// 设置远近景
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
						'z-index':'10',
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

			// 角度设置
			radius = Math.round( (250) / Math.tan( Math.PI / itemLength ) );

			// 绑定鼠标跟随事件
			window.addEventListener("mousemove", onMouseMove, false);
			ticker = setInterval( looper, 1000/60 );
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
