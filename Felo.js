let obj = JSON.parse($response.body);

if ($request.url.indexOf("accounts.felo.me/api/user") !== -1) {
  if (obj.data && ("name" in obj.data)) {
    obj.data.name = "不想实在，不想早八";
  }
}

if ($request.url.indexOf("translator.felo.me/api/user/plan") !== -1) {
  if (obj.data) {
    // 覆盖 type
    obj.data.type = "SUBSCRIPTION";

    // 添加或覆盖 plan 部分
    obj.data.plan = {
      "app_id": "translator",
      "charge_time": "2099-03-09T07:42:14+0000",
      "subscription_id_third": "390001666489782",
      "reset_time": "2099-03-09T07:42:14+0000",
      "count": 1,
      "user_product_id": "1897553328204836866",
      "subscription_type": "ANNUALLY",
      "subscribe_time": "2025-03-06T07:42:14+0000",
      "product_id": "translator_pro_annual_trial",
      "subscription_channel": "IAP",
      "expiration_time": "2025-03-06T07:44:20+0000",
      "reset_period": "ANNUALLY",
      "subscription_id": "1897553328045453314",
      "status": "CANCEL",
      "subscriber": "1897551694914646017"
    };

    // 修改 user_product_total 部分
    if (obj.data.user_product_total && Array.isArray(obj.data.user_product_total)) {
      obj.data.user_product_total.forEach(item => {
        if (item) {
          item.total_limit = "UNLIMITED"; // 修改为无限
          item.total = 599994; // 避免数值溢出问题
          item.balance = 599994;
        }
      });
    }
  }
}

$done({body: JSON.stringify(obj)});
