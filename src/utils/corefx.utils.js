// 浏览器地址解析
export function queryUrlParams() {
  var keyValuePair = function (key, value) {
    this.key = key;
    this.value = value;
  }
  var query = window.location.search.substring(1),
    vars = query.split("&"),
    pair;
  let list = [];
  for (let i = 0; i < vars.length; i++) {
    if (vars[i].length > 0) {
      pair = vars[i].split("=");
      if (pair[0] !== undefined && pair[0].length > 0) {
        list.push(new keyValuePair(pair[0], (pair[1])));
      }
    }
  }
  this.find = function (key) {
    if (key === undefined) {
      console.error("必须为key键赋值");
      return null;
    }
    let value = null;
    list.map(s=>{
      if (s.key === key) {
        value = s.value;
        return false;
      }
    })
    return value;
  };
  this.tolist = function () {
    return list;
  };
}

// cookie操作
export const cookies = {
  set: function(name, value) {
    // 缓存过期时间
    const Days = 30
    const exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/'
  },
  get: function(name) {
    let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    const reg = arr
    arr = document.cookie.match(reg)
    if (arr) {
      return unescape(arr[2])
    } else {
      return null
    }
  },
  del: function(name) {
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const cval = this.cookie.get(name)
    if (cval !== null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + ';path=/'
    }
  }
}

// localStorage 操作
export const storage = {
  set: (name, content) => {
    if (!name) { return }
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  },
  get: (name) => {
    if (!name) { return }
    return window.localStorage.getItem(name)
  },
  del: (name) => {
    if (!name) { return }
    window.localStorage.removeItem(name)
  }
}
