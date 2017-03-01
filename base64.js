var base64 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/']

function btoa(string) {
//将字符串转换成相应的二进制码
	var s = string.split('').reduce(function(acc,val) {
		var v = (val.charCodeAt(0)).toString(2)
		while(v.length % 8 !== 0) {
			v = '0' + v
		}
		return acc+v
	},'')
	//编码补零
	while(s.length % 6 !== 0){
		s+='0'
	}
	//找到base64相应字符组合并返回
	var r=''
	for (var i = 0; i <= s.length - 1; i+=6) {
		r=r+base64[parseInt(s.slice(i,i+6),2)]
	}
	var cc = string.length
	while(cc%3 !== 0) {
		r=r+'='
		cc--
	}
	return r
}

function atob(string) {
	//将base64转化为二进制
	var s = string.split('').reduce(function(acc,val) {
		if (val === '=') {
			return acc
		}
		var v = (base64.indexOf(val)).toString(2)
		while(v.length % 6 !== 0) {
			v = '0' + v
		}
		return acc+v
	},'')
	//补零
	while(s.length % 8 !== 0){
		s+='0'
	}
	//转化为相对应文字
	var r=''
	for (var i = 0; i <= s.length - 1; i+=8) {
		r=r+String.fromCharCode(parseInt(s.slice(i,i+8),2))
	}
	return r
}
	

