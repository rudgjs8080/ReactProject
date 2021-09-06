const json ={
	name:'key',
	addr:'newyork',
	age:30

}
console.log(json)
const json1 = {...json}
console.log(json1)
// json에 담긴 데이터를 json2로 복제하고
// 복제하면서 tel 속성의 값만 추가 
const json2 = {...json, tel:'222'}
console.log(json2)