'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	// 编辑文章
	if (event.id) {

	} 
	// 新增文章
	else {
		const data = await db.collection("article").add(event)
		if (data.id) {
			return {
				code: 200,
				id: data.id,
				msg: '新增文章成功'
			}
		} else {
			return {
				code: 101,
				msg: '新增文章失败'
			}
		}
	}
};
