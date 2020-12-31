import Mock from "mockjs";

const Random = Mock.Random;

// mock需要给三个参数,url(与axios请求是传的url一致,我这个是本地启动的项目就直接用本地域名了)
// 请求类型: get post...其他看文档
// 数据处理函数,函数需要return数据
Mock.mock("http://localhost:8080/abc", "get", () => {
  let citys = [];
  for (let i = 0; i < 10; i++) {
    let obj = {
      id: i + 1,
      city: Random.city(),
      color: Random.color()
    };
    citys.push(obj);
  }
  return [12, 3];
  return { cityList: citys };
});
// post请求,带参数,参数会在data中返回,会返回url,type,body三个参数,可以把data打印出来看看
Mock.mock("/cityInfo", {
  a: 1
});
