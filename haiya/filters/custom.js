// filters通用筛选器
// 判断男女
export const guideTypeVc = value => {
    if (!value) return '';
    let content = "";
    switch (parseInt(value)) {
        case 1:  content = "男";  break;
        case 2:  content = "女";    break;      
    }
    return content;
}
// 判断邮箱
export const validataEmail = (obj) => {
    return !/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(obj)
}
// 判断是否为空
export const isNull = str => {
    return (str == '' || str == "" || str == null || str == undefined || str == "undefined");
}
// 判断手机号是否正确
export const shouji = (obj) => {
    return !/^[1][3,4,5,7,8,9][0-9]{9}$/.test(obj)
}
// 时间转换
export const time = (value) => {
    if (!value) return "";
      var date = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =(date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1): date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      var h = date.getHours() + ":";
      var m = date.getMinutes() + ":";
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
}