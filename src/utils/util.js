// 日期转换
function formatDate (time) {
  var getTime = new Date(time).getTime()
  var curTime = new Date().getTime()
  var minus = parseInt(curTime - getTime + 8 * 60 * 60 * 1000) / 1000
  var tips = ''
  if (minus / 60 < 1) {
    tips = minus + '秒前'
  } else if (minus / 60 / 60 < 1 && minus / 60 > 1) {
    tips = parseInt(minus / 60) + '分钟前'
  } else if (minus / 60 / 60 / 24 < 1 && minus / 60 / 60 > 1) {
    tips = parseInt(minus / 60 / 60) + '小时前'
  } else if (minus / 60 / 60 / 24 > 1 && minus / 60 / 60 / 24 <= 7) {
    tips = parseInt(minus / 60 / 60 / 24) + '天前'
  } else if (minus / 60 / 60 / 24 / 7 > 1 && minus / 60 / 60 / 24 / 7 <= 4) {
    tips = parseInt(minus / 60 / 60 / 24 / 7) + '周前'
  } else if (minus / 60 / 60 / 24 / 7 / 30 > 1 && minus / 60 / 60 / 24 / 7 / 30 <= 12) {
    tips = parseInt(minus / 60 / 60 / 24 / 7 / 30) + '月前'
  } else if (minus / 60 / 60 / 24 / 7 / 30 / 12 > 1) {
    tips = parseInt(minus / 60 / 60 / 24 / 7 / 30 / 12) + '年前'
  }
  return tips
}

export {
  formatDate
}
