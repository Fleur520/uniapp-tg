'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	const dbCmd = db.command
	const $ = dbCmd.aggregate
	let articles = await db.collection('articles').get()
	let cate = await db.collection('cate').get()
	let recomments = await db.collection('recomments').get()
	let tags = await db.collection('tags').get()
	//返回数据给客户端
	// const recomments = 
	// const res = {
	// 	"articles":  {
	// 		"err_no": 0,
	// 		"err_msg": "success",
	// 		"data": JSON.stringify(articles),
	// 		"cursor": "eyJ2IjoiNjk2MTc5MDQ5NDUxNDg3MjMzMyIsImkiOjEwfQ==",
	// 		"count": 168238,
	// 		"has_more": true
	// 	},
	// 	"cate": JSON.stringify(cate),
	// 	"recomments": {
	// 		"err_no": 0,
	// 		"err_msg": "success",
	// 		"data": JSON.stringify(recomments),
	// 		"cursor": "eyJ2IjoiNjk2MTc5MDQ5NDUxNDg3MjMzMyIsImkiOjEwfQ==",
	// 		"count": 168238,
	// 		"has_more": true
	// 	},
	// 	"tags":{
	// 		"err_no": 0,
	// 		"err_msg": "success",
	// 		"data": JSON.stringify(tags)
	// 	}
	// }
	console.log('res : ', cate)
	return cate
};
