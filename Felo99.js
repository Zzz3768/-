/* 
  felo翻译



[rewrite_local]
^https?:\/\/(translator|accounts).felo.me\/api\/user.*$ url script-response-body https://raw.githubusercontent.com/Zzz3768/-/refs/heads/main/Felo.js

^https?:\/\/translator.felo.me\/api\/translation\/thirdToken url script-request-header https://raw.githubusercontent.com/Zzz3768/-/refs/heads/main/Felock.js

[mitm]
hostname = translator.felo.me, accounts.felo.me
  
  */
