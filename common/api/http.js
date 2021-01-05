/**
 * @param {Object} options 传递的 云函数名称和需要的数据
 * options = {
	 name: '云函数名称',
	 data: '传递的数据'
 }
 */
export default function(options) {
	return new Promise((reslove,reject) => {
		const {name, data} = options
		uniCloud.callFunction({
			name,
			data
		}).then(res => {
			if(res.result.code == 200) reslove(res.result.data)
			else reject(res.result)
		}).catch(err => reject(err))
	})
}