# 使用`uni-app`编写的项目，结合`uni-cloud`

# 创建云函数
```js
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('tabList')
	const {data} = await collection.get()
	//返回数据给客户端
	return {
		code: 200,
		data
	}
}

```
1. `const db = uniCloud.database()`获取数据库
2. `db.collection('tabList')`连接数据表为`tabList`
# 使用云函数
```js
uniCloud.callFunction({
	name: 'tabList',
}).then(res => {
	if(res.result.code == 200) {
		console.log(res)
	}
}).catch(err => reject(err))
```
1. `uniCloud.callFunction`用来调用云函数的方法
2. `name: 'tabList'`用来指定需要调用的云函数