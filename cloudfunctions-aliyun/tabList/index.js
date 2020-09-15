'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('tabList')
	const {data} = await collection.get()
	//返回数据给客户端
	return {
		code: 200,
		data
	}
};
