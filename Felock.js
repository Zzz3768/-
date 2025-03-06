// felock.js
const targetCookie = '_clsk=1e3ji69%7C1723606564421%7C1%7C1%7Cw.clarity.ms%2Fcollect; _ga_70F8QP140X=GS1.1.1723606552.4.1.1723606558.0.0.0; _ga=GA1.1.347029008.1723476322; _clck=8lm7fs%7C2%7Cfob%7C0%7C1685';
const targetDeviceId = '902C611A-A12A-4D48-9DEF-562EF8155908';
const targetAuthorization = 'qq_60cabdacf608480aa95663ab8f0f1ab5__';
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
