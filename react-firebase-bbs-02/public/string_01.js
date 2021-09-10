let str = "";
console.log(str);

if (str) {
  console.log("hello");
} else {
  console.log("no...");
}

let num = 0;
console.log(num);
if (num) {
  console.log("있음");
} else {
  console.log("없음");
}

/**
 * JS 에서는
 * null, "", 0, undefined, NaN 등등의 값들이
 * if 를 만나면 false가 된다
 */

let result = str || "대한민국";
