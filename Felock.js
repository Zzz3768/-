// felock.js
const targetCookie = '_clsk=xp9tb4%7C1741242874359%7C2%7C1%7Cu.clarity.ms%2Fcollect; _ga_70F8QP140X=GS1.1.1741242868.18.1.1741242874.0.0.0; _ga=GA1.1.266113278.1727702606; _clck=14ku2au%7C2%7Cftz%7C0%7C1734';
const targetDeviceId = 'A9FACB9C-072B-438B-B76C-66E48E5EE74E';
const targetAuthorization = 'bG_cfc21150677242449fe74b9af7dfbc44__';
const targetAcceptEncoding = 'gzip, deflate, br';

if (typeof $request !== 'undefined') {
  // 深拷贝原始请求头
  let modifiedHeaders = JSON.parse(JSON.stringify($request.headers));

  // 修改请求头参数（覆盖原有字段）
  if (modifiedHeaders['Cookie']) {
    modifiedHeaders['Cookie'] = targetCookie; // 覆盖 Cookie
  } else if (modifiedHeaders['cookie']) {
    modifiedHeaders['cookie'] = targetCookie; // 覆盖 cookie（小写）
  }

  if (modifiedHeaders['deviceid']) {
    modifiedHeaders['deviceid'] = targetDeviceId; // 覆盖 deviceid
  } else if (modifiedHeaders['deviceId']) {
    modifiedHeaders['deviceId'] = targetDeviceId; // 覆盖 deviceId（驼峰）
  }

  if (modifiedHeaders['authorization']) {
    modifiedHeaders['authorization'] = targetAuthorization; // 覆盖 authorization
  } else if (modifiedHeaders['Authorization']) {
    modifiedHeaders['Authorization'] = targetAuthorization; // 覆盖 Authorization（首字母大写）
  }

  if (modifiedHeaders['accept-encoding']) {
    modifiedHeaders['accept-encoding'] = targetAcceptEncoding; // 覆盖 accept-encoding
  } else if (modifiedHeaders['Accept-Encoding']) {
    modifiedHeaders['Accept-Encoding'] = targetAcceptEncoding; // 覆盖 Accept-Encoding（首字母大写）
  }

  // 返回修改后的请求头
  $done({ headers: modifiedHeaders });
} else {
  $done();
}
