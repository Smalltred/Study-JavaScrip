// 获取第一个小li
const li1 = document.querySelector('.xtx_navs li');

const li2 = li1.nextElementSibling;


function renderUserNav() {
	// 读取本地存储的用户名
	const username = localStorage.getItem('xtx-username');
	if (username) {
		li1.innerHTML = `<a href="javascript:;">${username}</a>`;
		li2.innerHTML = `<a href="javascript:;">退出登陆</a>`;
	} else {
		li1.innerHTML = '<a href="./login.html">请先登录</a>';
		li2.innerHTML = '<a href="./register.html">免费注册</a>';
	}
}

renderUserNav();

li2.addEventListener('click', function () {
	localStorage.removeItem('xtx-username');
	// window.location.href = 'login.html';
	renderUserNav();
});

