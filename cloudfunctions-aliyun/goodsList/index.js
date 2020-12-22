'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('opendb-mall-goods')
	//event为客户端上传的参数
	console.log('event : ', event)
	const {
		data
	} = await collection.get()
	//返回数据给客户端
	return {
		code: 200,
		data
	}
};
