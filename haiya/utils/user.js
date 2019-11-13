
//post
export function requestPost(baseUrl,params) {
	  return uni.request({
			url:baseUrl,
			method:'post',
			header:{
				"content-type": "application/x-www-form-urlencoded"
			},
			data:params,
		})
}
//get
export function requestGet(baseUrl,params) {
	  return uni.request({
			url:baseUrl,
			method:'get',
			header:{
				"content-type": "application/x-www-form-urlencoded"
			},
			data:params,
		})
}