var request = require("request");
const fs = require("fs");
let code = 9012014331301028;
let f = 1;
let d = -1;
function r(code) {
  request(
    `https://web.kwwblcj.com/api.php?m=weixin-product&callback=JSON_CALLBACK&datacode=${code}&open_id=oJ7JruBLs65BlIkr5fvphCs2NsDw&callback=jQuery110106144314555000534_1613195511151&_=1613195511152`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let str = "jQuery110106144314555000534_1613195511151";
        let bl = body.length;
        let res = body.slice(str.length + 1, bl - 1);
        let s = JSON.parse(res);
        if (s.ext.event_type === "3") {
          fs.appendFile("./1.txt", s.ext.code + "\n", (err, data) => {
            // if (err) throw err;
            if (err) console.log(err);
            // console.log(a); // 请求成功的处理逻辑，注意body是json字符串
          });
        }
        // let a = `${s.ext.code} ------${s.ext.event_type} ---- ${s.ext.is_zhuanpan} ------  ${s.ext.hctx}------- ${s.ext.fwmsg} \n`;
      }
    }
  );
}

function choujiang(code, validcode) {
  let api1 =
    "https://web.kwwblcj.com/api.php?m=weixin-send&do=checkCode&callback=JSON_CALLBACK";
  let api2 =
    "https://web.kwwblcj.com/api.php?m=weixin-send&callback=JSON_CALLBACK";
  request(
    `${api2}&datacode=${code}&validcode=${validcode}&open_id=oJ7JruBLs65BlIkr5fvphCs2NsDw&time=1613199692&token=18ac1457e6688254308bd8b690aae560&callback=jQuery110105010213249750468_1613199392736&_=1613199392739`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let str = "jQuery110105010213249750468_1613199392736";
        let bl = body.length;
        let res = body.slice(str.length + 1, bl - 1);
        let s = JSON.parse(res);
        console.log(s);
        // let a = `${s.msg}  \n`;
        // fs.appendFile("./2.txt", a, (err, data) => {
        //   // if (err) throw err;
        //   if (err) console.log(err);
        // //   console.log(a); // 请求成功的处理逻辑，注意body是json字符串
        // });
      }
    }
  );
}
let i = 0;
function bb() {
  while (i<100) {
    i++;
    ggg(i)
    // f++;
    // d--;
    // choujiang(9012014331301276, i + f);
    // choujiang(9012014331301276, i + d);
  }
}
bb()
// while (f < 1000) {
//     f++
//     d--
//     r(code + f)
//     r(code + d)
//     console.log(`次数 ${f}`)
// }

// fs.writeFile('./1.txt', 'heelo', () => {})
