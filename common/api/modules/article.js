import http from '../http.js'
// 获取文章数据
export const article_queryList_API = params => {
	return http(params)
}
/** 新增文章 */
export const article_insert_API = (params)=> {
	return http(params)
}