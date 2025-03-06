let obj = JSON.parse($response.body);

if ($request.url.indexOf("accounts.felo.me/api/user") !== -1) {
  if (obj.data && ("name" in obj.data)) {
    obj.data.name = "逃离明斯克";
  }
} else if ($request.url.indexOf("translator.felo.me/api/user/plan") !== -1) {
  if (obj.data && Array.isArray(obj.data.user_product_total)) {
    obj.data.user_product_total.forEach(item => {
      if ("total" in item) {
        item.total = 5999999899;
      }
      if ("balance" in item) {
        item.balance = 5999999899;
      }
    });
  }
}

$done({body: JSON.stringify(obj)});
