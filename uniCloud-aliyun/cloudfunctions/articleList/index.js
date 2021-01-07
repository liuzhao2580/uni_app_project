'use strict';
// 获取文章数据
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {
		pageSize,
		pageIndex,
		category_id
	} = event
	const filterMatch = category_id? {category_id}: {}
	// 聚合表达式 https://uniapp.dcloud.io/uniCloud/cf-database?id=%e8%81%9a%e5%90%88%e8%a1%a8%e8%be%be%e5%bc%8f
	const {
		data
	} = await db.collection('article')
		.aggregate()
		.match(filterMatch)
		.end()

	//返回数据给客户端
	return {
		code: 200,
		data
	}
};
