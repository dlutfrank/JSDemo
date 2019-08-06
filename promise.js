// 测试是否能聚合promise的resolve和reject数据
async function send(success){
	return new Promise((resolve, reject) => {
		if(success){
			resolve('success')
			return;
		}
		reject('failed');
	});
}


function trySend(success){
	send(success)
		.then(r => ({r}))
		.catch(err => ({err}))
		.then(({r, err}) => {
			console.log('r, err: || ', r, err);
		});
}

console.log('try send success');
trySend(true);
console.log('try send failed');
trySend(false);

fun = (r) => ({r}); // 等价于 fun =(r) => { return {r}; }
fun1 = (r) => {r};

console.log('fun(a)');
console.log(fun('a'));
console.log('fun1(b)');
console.log(fun1('b'));
// 结论，可以聚合