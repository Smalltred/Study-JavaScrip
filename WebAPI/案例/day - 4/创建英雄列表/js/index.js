// 后的的数据
// datas = [{},{},{}]
let datas = [
	{name: '司马懿', imgSrc: '01.jpg'},
	{name: '女娲', imgSrc: '02.jpg'},
	{name: '百里守约', imgSrc: '03.jpg'},
	{name: '亚瑟', imgSrc: '04.jpg'},
	{name: '虞姬', imgSrc: '05.jpg'},
	{name: '张良', imgSrc: '06.jpg'},
	{name: '安其拉', imgSrc: '07.jpg'},
	{name: '李白', imgSrc: '08.jpg'},
	{name: '阿珂', imgSrc: '09.jpg'},
	{name: '墨子', imgSrc: '10.jpg'},
	{name: '鲁班', imgSrc: '11.jpg'},
	{name: '嬴政', imgSrc: '12.jpg'},
	{name: '孙膑', imgSrc: '13.jpg'},
	{name: '周瑜', imgSrc: '14.jpg'},
	{name: 'XXX', imgSrc: '15.jpg'},
	{name: 'XXX', imgSrc: '16.jpg'},
	{name: 'XXX', imgSrc: '17.jpg'},
	{name: 'XXX', imgSrc: '18.jpg'},
	{name: 'XXX', imgSrc: '19.jpg'},
	{name: 'XXX', imgSrc: '20.jpg'}
];

// 选择按钮
const button = document.querySelector('#create');
// 选择ul list
const ul = document.querySelector('.list');
button.addEventListener('click', function () {
	for (let i = 0; i < datas.length; i++) {
		// 创建li
		const li = document.createElement('li');
		// 创建img
		// const img = document.createElement('img');
		// img.src = `uploads/heros/${datas[i]['imgSrc']}`;
		// img.alt = datas[i]['name'];
		// li.appendChild(img);
		// ul.appendChild(li);
		li.innerHTML = `<img src="uploads/heros/${datas[i]['imgSrc']}" alt="${datas[i]['name']}">`;
		ul.appendChild(li);
	}
});