import http from '../http.js'
/** 获取首页的 tab 栏的数据 */
export const tabbar_api = (params)=> {
	return http(params)
}