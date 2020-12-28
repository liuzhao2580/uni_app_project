/** 设置随机数
 * @param {number} max 传递的最大数值 
 * @param {number} min = 0 传递的最小数值 
 * @param {string} type   'integer'整数, 'float'浮点数 传递的类型
 */
export function RandomMath(max, min = 0,type = 'integer') {
	let randomValue = 0
	randomValue = Math.floor((Math.random() * max) + 1)
	if(randomValue < min) {
		randomValue += min
	}
	return randomValue
}