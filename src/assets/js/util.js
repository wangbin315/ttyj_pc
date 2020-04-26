import $ from 'jquery';

export const host = process.env.NODE_ENV === 'production' ? 
											'http://' + window.location.host : ''

/**
 * 接口请求
 * @method ajax
 * @public
 * @param {JSON} ajaxParam 参数
 * @example
 *      util.ajax({
 *          url: 'path',
 *          data: {},
 *          timeout: 0,
 *          success: function(data){},
 *          error: function(){},
 *          noNetwork: function(){}
 *      })
 * @since 3.0.0
*/
export let ajax = (ajaxParam) => {
	let headersJson = {

	};
	// let param = '?dmclient=pcweb&X-Doumi-Agent=weixinqy'
	let param = ''
	if (window.navigator.onLine == true) {
		//Online
		$.ajax({
			url: `${host}${ajaxParam.url}${param}`,
			xhrFields: {
				withCredentials: true
			},
			timeout: ajaxParam.timeout || 10000,
			headers: headersJson,
			data: ajaxParam.data || {},
			dataType: ajaxParam.dataType || 'json',
			type: ajaxParam.type || 'GET',
			success: (data) => {
				if (data.code == 403) {
					// location.href = 'http://' + window.location.host
					location.href = 'http://' + window.location.host+'/backend/login'
				}
				ajaxParam.success(data)
				if(data.code != 200){
					console.log('返回异常！！！')
					console.log('问题接口：'+ajaxParam.url)
					console.log('入参：'+JSON.stringify(ajaxParam.data))
					console.log('出参：'+JSON.stringify(data))
				}
			},
			error: (xhr, status) => {
				if (status === 'timeout') {
					// alert('网络连接失败，请检查网络')
					console.log('接口超时！！！')
					console.log('超时接口：' + ajaxParam.url)
					console.log('入参：' + JSON.stringify(ajaxParam.data))
					ajaxParam.noNetwork()
				} else {
					console.log('接口error！！！')
					console.log('问题接口：'+ajaxParam.url)
					console.log('入参：'+JSON.stringify(ajaxParam.data))
					ajaxParam.error(xhr, status)
				}
			}
		});
	} else {
		//Offline
		console.log('接口超时！！！')
		console.log('超时接口：' + ajaxParam.url)
		console.log('入参：' + JSON.stringify(ajaxParam.data))
		ajaxParam.noNetwork()
	}

}             


/**
 * getLocalTime 日期格式初始化的封装
 * unixtime: 日期
 * pattern: 初始化格式
 */
export let getLocalTime = (unixtime,pattern) => {
  Date.prototype.format = function(pattern){
    var pad = function (source, length) {
      var pre = "",
        negative = (source < 0),
        string = String(Math.abs(source));
      if (string.length < length) {
        pre = (new Array(length - string.length + 1)).join('0');
      }
      return (negative ?  "-" : "") + pre + string;
    };
    if ('string' != typeof pattern) {
      return this.toString();
    }
    var replacer = function(patternPart, result) {
      pattern = pattern.replace(patternPart, result);
    }
    var year    = this.getFullYear(),
		    month   = this.getMonth() + 1,
		    date2   = this.getDate(),
		    hours   = this.getHours(),
		    minutes = this.getMinutes(),
		    seconds = this.getSeconds();

    replacer(/yyyy/g, pad(year, 4));
    replacer(/yy/g, pad(parseInt(year.toString().slice(2), 10), 2));
    replacer(/MM/g, pad(month, 2));
    replacer(/M/g, month);
    replacer(/dd/g, pad(date2, 2));
    replacer(/d/g, date2);

    replacer(/HH/g, pad(hours, 2));
    replacer(/H/g, hours);
    replacer(/hh/g, pad(hours % 12, 2));
    replacer(/h/g, hours % 12);
    replacer(/mm/g, pad(minutes, 2));
    replacer(/m/g, minutes);
    replacer(/ss/g, pad(seconds, 2));
    replacer(/s/g, seconds);

    return pattern;
  };
  var timestr = 0
  if(unixtime.getTime){
    timestr = unixtime
  }else{
    timestr = new Date(parseInt(unixtime))
  }
  var datetime = timestr.format(pattern);
  return datetime;
}

/**
 * localStorage 带过期时间的封装
 * key: 关键字
 * value: 值
 * exp: 过期时间，秒
 */
export let setLocalStorage = (key, value, exp) => {
    //不传过期时间 或 exp==0  ----  永不过期
    let curTime = 0
    if(exp){
        curTime = new Date().getTime() + exp * 1000
    }
    window.localStorage.setItem(key, JSON.stringify({data:value,time:curTime}))
}
export let getLocalStorage = (key) => {
    let data = window.localStorage.getItem(key)
    if (data !== null) {
        let dataObj = JSON.parse(data);
        // console.log(dataObj);
        if (dataObj.time != 0 && new Date().getTime() > dataObj.time) {
            console.log('信息已过期');
            window.localStorage.removeItem(key)
            return null
        } else {
            // console.log('返回缓存数据');
            return dataObj.data
        }
    }
    return null
}
/**
 * sessionStorage 会话级缓存
 * key: 关键字
 * value: 值
 */
export let setSessionStorage = (key, value) => {
    window.sessionStorage.setItem(key, JSON.stringify({data:value}))
}
export let getSessionStorage = (key) => {
    let data = window.sessionStorage.getItem(key)
    if (data !== null) {
        return JSON.parse(data).data
    }
    return null
}