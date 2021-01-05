import http from './http.js'
/** 新增文章 */
export const article_insert_API = (params)=> {
	return http(params)
}