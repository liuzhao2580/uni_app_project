import http from './http.js'
/** 获取首页的 tab 栏的数据 */
export const tabbar_api = (params)=> {
	return http(params)
}
/** 获取首页的猜你喜欢的数据 */
export const recommend_API = (params) => {
	return http(params)
}