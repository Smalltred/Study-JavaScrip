// 获取input option的输入信息
// 对input的内容是否为空进行判断
// 对input输入的内容 左右的空格进行去除

// 获取表单
const form = document.querySelector('.info');
// 姓名
const inputUname = document.querySelector('.uname');
// 年龄
const inputAge = document.querySelector('.age');
// 薪资
const inputSalary = document.querySelector('.salary');
// 城市
const selectCity = document.querySelector('.city');
// 性别
const selectGender = document.querySelector('.gender');
// 表格内容区
const tbody = document.querySelector('tbody');
// 获取form表里面的所有输入元素，如果为空则直接return
const items = document.querySelectorAll('input[name]');

let arr = [];

// 阻止表单默认提交行为
form.addEventListener('submit', function (evt) {
	evt.preventDefault();
	for (let i = 0; i < items.length; i++) {
		if (items[i].value === '') {
			return alert('请不要输入空的内容');
		}
	}


	let obj = {
		stuId: arr.length + 1,
		uname: inputUname.value.trim(),
		age: inputAge.value.trim(),
		gender: selectGender.value,
		salary: inputSalary.value.trim(),
		city: selectCity.value,
	};
	arr.push(obj);
	// console.log(arr);
	this.reset();
	render();
});


// 渲染
function render() {
	// 先清空tbody, 每次添加数据重新渲染
	tbody.innerHTML = '';
	for (let i = 0; i < arr.length; i++) {
		const tr = document.createElement('tr');
		tr.innerHTML = `<td>${arr[i]['stuId']}</td><td>${arr[i]['uname']}</td><td>${arr[i]['age']}</td><td>${arr[i]['gender']}</td><td>${arr[i]['salary']}</td><td>${arr[i]['city']}</td><td><a href="javascript:" data-id="${i}">删除</a></td>`;
		tbody.appendChild(tr);
	}
}


// 删除
// 事件委托
tbody.addEventListener('click', function (evt) {
	if (evt.target.tagName === 'A') {
		// 获取A标签中那点data-id 删除数组中对应的数据即可
		// console.log(evt.target.dataset.id);
		arr.splice(+evt.target.dataset.id - 1, 1);
		render();
	}
});






