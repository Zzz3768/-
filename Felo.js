// 检查是否已经弹出过通知
const hasShownNotification = $persistentStore.read("hasShownNotification");

if (!hasShownNotification) {
  // 首次运行，弹出通知
  $notification.post("📢 不想练琴，不想早八", "", "");
  // 将标志位设置为已弹出
  $persistentStore.write("true", "hasShownNotification");
}

let obj = JSON.parse($response.body);

if ($request.url.indexOf("accounts.felo.me/api/user") !== -1) {
  if (obj.data && ("name" in obj.data)) {
    obj.data.name = "我真是服了";
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
