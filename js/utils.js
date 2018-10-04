function qs(selector, element) {
	return (element || document).querySelector(selector);
};

function qsa(selector, element) {
	return (element || document).querySelectorAll(selector);
};

function $on(target, type, callback) {
	function dispatch(event) {
		if (!event.target.disabled) {
			callback.call(target, event);
		}
	}
	target.addEventListener(type, dispatch);
};
function show(element) {
	element.classList.remove('hide');
	element.classList.add('show');
}
function hide(element) {
	element.classList.remove('show');
	element.classList.add('hide');
}
function $bubble(target, type, callback) {

	function callTarget(event) {
		let parentId = event.target.id.split('_')[1];
		let actualTarget = document.getElementById(`li_${parentId}`);
		callback.call(actualTarget, parentId);
	}
	$on(target, type, callTarget);
};
function createDOMList(type, tag, dataArray) {
	let fragment = document.createDocumentFragment();
	dataArray.forEach(data => {
		let node = $create('createElement', tag);
		fragment.appendChild(node);
	});
	return fragment;
}
function $create (type, tag, attrs) {
	let element = document[type](tag);
	attrs && attrs.forEach((attr) => {
		element.setAttribute(attr.prop, attr.value);
	});
	return element;
};

export default {
	qs: qs,
	qsa: qsa,
	create: $create,
	bubble: $bubble,
	on: $on,
	createDOMList: createDOMList,
	hide: hide,
	show: show
}
