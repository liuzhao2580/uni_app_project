'use strict';
// 获取 tabbar 数据
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('home-tabbar')
	const {
		data
	} = await collection.get()
	//返回数据给客户端
	return {
		code: 200,
		data
	}
};
