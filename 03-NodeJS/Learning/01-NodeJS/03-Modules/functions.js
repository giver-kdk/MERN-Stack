function adder(n1, n2)
{
	console.log(`Sum is: ${n1 + n2}`);
}
function subtractor(n1, n2)
{
	console.log(`Difference is: ${n1 - n2}`);
}
// Exporting functions like react exports components
module.exports = {adder, subtractor};				// 'exports' is an object