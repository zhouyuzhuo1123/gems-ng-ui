import 'whatwg-fetch'

function post(url,options){
	options = Object.assign({
		method: 'POST',
		headers: {}
	}, options)
	options.headers['Content-Type'] = 'application/json';
	options.body = JSON.stringify(options.body);
 	return fetch(url,options).then(resp => resp.json());
}

function put(url,options){
	options = Object.assign({
		method: 'PUT',
		headers: {}
	}, options)
	options.headers['Content-Type'] = 'application/json';
	options.body = JSON.stringify(options.body);
 	return fetch(url,options).then(resp => resp.json());
}


function get(url){
	return fetch(url).then(resp => resp.json());
}
export default{
	post,
	get,
	put
}