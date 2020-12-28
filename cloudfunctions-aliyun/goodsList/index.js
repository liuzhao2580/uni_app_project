'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('opendb-mall-goods')
	//event为客户端上传的参数 
	/* 
	 event = {
		 pageSize: 10,
		 pageNum: 1,
		 id?: string
	 }
	 */
	console.log('event : ', event)
	
	const {pageSize = 10,pageNum = 1,id} = event
	
	const filter = id ? {category_id: id} : {is_recommend: true}
	// 聚合操作 https://uniapp.dcloud.io/uniCloud/cf-database?id=aggregate
	const data = await collection
	.aggregate()
	.match(filter)
	.project({
		goods_name: true,
		goods_price: true,
		goods_thumb: true,
		category_id: true,
		category_name: true,
		remain_count: true,
		total_sell_count: true,
		comment_count: true,
		is_recommend: true,
		is_new: true,
		is_hot: true,
		is_skill: true
	})
	.end()
	
	//返回数据给客户端
	return {
		code: 200,
		data
	}
};
