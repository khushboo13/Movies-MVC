function qs(selector, element) {
	return (element || document).querySelector(selector);
};

function qsa(selector, element) {
	return (element || document).querySelectorAll(selector);
};

function $on(target, type, callback) {
	target.addEventListener(type, callback);
};

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
	createDOMList: createDOMList
}
