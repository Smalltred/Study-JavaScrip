// 选择表单元素
const uname = document.querySelector('input[name="username"]');

const phone = document.querySelector('input[name="phone"]');

const code = document.querySelector('input[name="code"]');

const password = document.querySelector('input[name="password"]');

const confirm = document.querySelector('input[name="confirm"]');

const confirmXieYi = document.querySelector('.icon-queren');

// 选择form表单 阻止表单提交
const form = document.querySelector('form');


function verifyUserName() {
	let flag = true;
	const reg = /^[a-zA-Z0-9]{6,10}$/;
	if (reg.test(uname.value)) {
		uname.nextElementSibling.innerHTML = '';
	} else {
		flag = false;
		uname.nextElementSibling.innerHTML = '昵称长度为6到10个字符';
	}
	console.log(flag);
	return flag;
}

function verifyPhone() {
	let flag = true;
	const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
	if (reg.test(phone.value)) {
		phone.nextElementSibling.innerHTML = '';
	} else {
		flag = false;
		phone.nextElementSibling.innerHTML = '请输入正确的手机号';
	}
	return flag;
}

let isSendCode = true;

function verifyCode() {
	let flag = true;
	const reg = /^[0-9]{6}$/;
	if (reg.test(code.value)) {
		code.nextElementSibling.innerHTML = '';
	} else {
		flag = false;
		isSendCode = false;
		code.nextElementSibling.innerHTML = '请输入正确的验证码';
	}
	return flag;
}

function verifyPassword() {
	let flag = true;
	const reg = /^[a-zA-Z0-9-_.]{6,20}$/;
	if (reg.test(password.value)) {
		password.nextElementSibling.innerHTML = '';
	} else {
		flag = false;
		password.nextElementSibling.innerHTML = '设置6至20位字符、数字和符号组合';
	}
	return flag;
}

function verifyConfirm() {
	let flag = true;
	if (password.value === confirm.value) {
		confirm.nextElementSibling.innerHTML = '';
	} else {
		flag = false;
		confirm.nextElementSibling.innerHTML = '两次密码不一致';
	}
	return flag;
}

// 同意模块
confirmXieYi.addEventListener('click', function () {
	this.classList.toggle('icon-queren2');
});


uname.addEventListener('change', verifyUserName);
phone.addEventListener('change', verifyPhone);
code.addEventListener('change', verifyCode);
password.addEventListener('change', verifyPassword);
confirm.addEventListener('change', verifyConfirm);

form.addEventListener('submit', function (evt) {
	if (!confirmXieYi.classList.contains('icon-queren2')) {
		evt.preventDefault();
		return alert('请勾选同意协议.');
	}
	// 依次判断上面的文本框 是否通过
	if (!verifyUserName()) evt.preventDefault();
	if (!verifyPhone()) evt.preventDefault();
	if (!verifyCode()) evt.preventDefault();
	if (!verifyPassword()) evt.preventDefault();
	if (!verifyConfirm()) evt.preventDefault();
});


// 验证码倒计时发送
const codeSend = document.querySelector('.code');

let flag = true;  // 节流阀
codeSend.addEventListener('click', function () {
	if (flag && verifyPhone()) {
		flag = false;
		let i = 5;
		// 点击后立马触发
		codeSend.innerHTML = `0${i}秒重新获取`;
		const timer = setInterval(function (e) {
			i--;
			codeSend.innerHTML = `0${i}秒重新获取`;
			if (i === 0) {
				flag = true;
				clearInterval(timer);
				codeSend.innerHTML = '重新获取';
			}
		}, 1000);
	}
});
