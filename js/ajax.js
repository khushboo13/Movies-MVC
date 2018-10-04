function makeAjax(url, method="get", data) {
	return fetch(url)
	 				.then(response => response.json())
	 				.then(data => data);
}

export default {
	ajax: makeAjax
}
