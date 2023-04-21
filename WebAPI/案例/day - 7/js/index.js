// 选择小盒子 右边显示大盒子
// 小盒子
const smallBox = document.querySelector('.small');
// 中盒子
const middleImgBox = document.querySelector('.middle');
// 大盒子
const largeBox = document.querySelector('.large');
// 切换图片
smallBox.addEventListener('mouseover', function (evt) {
	if (evt.target.tagName === 'IMG') {
		this.querySelector('.small ul .active').classList.remove('active');
		evt.target.parentNode.classList.add('active');
		middleImgBox.querySelector('img').src = evt.target.src;
		// 大盒子更换背景图
		largeBox.style.backgroundImage = `url(${evt.target.src})`;
	}
});

// 鼠标进入中盒子不显示和隐藏
middleImgBox.addEventListener('mouseenter', showLargeImage);
middleImgBox.addEventListener('mouseleave', hideLargeImage);

let timer = null;

function showLargeImage() {
	clearTimeout(timer);
	largeBox.style.display = 'block';
}

function hideLargeImage() {
	timer = setTimeout(function () {
		largeBox.style.display = 'none';
	}, 200);
}

// 鼠标进入大盒子不显示和隐藏
largeBox.addEventListener('mouseenter', showLargeImage);
largeBox.addEventListener('mouseleave', hideLargeImage);


// 鼠标经过大盒子显示中等遮罩层
// 遮罩层
const layer = document.querySelector('.middle .layer');

middleImgBox.addEventListener('mouseenter', function () {
	layer.style.display = 'block';
});
middleImgBox.addEventListener('mouseleave', function () {
	layer.style.display = 'none';
});


// 计算鼠标实时的距离父盒子位置
// 算法 计算鼠标在页面的x，y轴的坐标，计算盒子距离页面的左边和上面的距离，用(x - left) (y - top) 得到在盒子里的位置
// 移动黑色遮罩盒子

middleImgBox.addEventListener('mousemove', function (evt) {
	// console.log(evt.pageX - left);
	// console.log(middleImgBox.getBoundingClientRect());
	let x = evt.pageX - middleImgBox.getBoundingClientRect().left;
	let y = evt.pageY - middleImgBox.getBoundingClientRect().top - document.documentElement.scrollTop;
	// console.log(x, y);
	if (x >= 0 && x <= 400 && y >= 0 && y <= 400) {
		// x轴最大移动范围 和 y轴最大移动范围
		let mx = 0, my = 0;
		// 如果 x轴也就是遮罩层距离 父盒子的范围小于100 也就是1/4 就不动
		if (x < 100) mx = 0;
		// 如果 x轴的大和最小移动范围也就是遮罩层 也就是1/3 父盒子的宽度是 400 在 范围100 和 300 之间移动
		if (x >= 100 && x <= 300) mx = x - 100;
		// 当x轴大于300时停止
		if (x > 300) mx = 200;
		// 下面同理
		if (y < 100) my = 0;
		if (y >= 100 && y <= 300) my = y - 100;
		if (y > 300) my = 200;

		layer.style.left = mx + 'px';
		layer.style.top = my + 'px';
		// 遮罩层在盒子里的x y 位置
		// 	遮罩层移动1px 大盒子移动2px
		largeBox.style.backgroundPositionX = -2 * mx + 'px';
		largeBox.style.backgroundPositionY = -2 * my + 'px';
	}
});
// console.log(document.documentElement.pageX);
