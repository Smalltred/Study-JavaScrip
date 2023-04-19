// tab栏的切换

const nav = document.querySelector('.tab-nav');

// 切换内容
const tabPane = document.querySelectorAll('.tab-pane');
console.log(tabPane);

// 事件委托

nav.addEventListener('click', function (evt) {
	if (evt.target.tagName === 'A') {
		// 先排他
		document.querySelector('.tab-nav .active').classList.remove('active');
		// 在给点击加class
		evt.target.classList.add('active');
		// console.log(tabPane[evt.target.dataset.id]);

		// 先干掉所有人
		for (let i = 0; i < tabPane.length; i++) {
			tabPane[i].style.display = 'none';
		}
		tabPane[evt.target.dataset.id].style.display = 'block';
	}
});

// 阻止表单 页面跳转

const form = document.querySelector('form');
const agree = document.querySelector('input[name="agree"]');

const username = document.querySelector('input[name="username"]');

form.addEventListener('submit', function (evt) {
	evt.preventDefault();
	if (!agree.checked) {
		return alert('请勾选同意协议');
	}
	// 记录用户名到本地存储
	localStorage.setItem('xtx-username', username.value);
	window.location.href = 'index.html';
});
